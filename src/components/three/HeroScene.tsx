"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

// Configuration
const CUBE_COUNT = 100;
const BOUNDARY = 15;
const CUBE_SIZE = 0.5; // Slightly larger cubes
const FORCE_RADIUS = 4;
const MAX_VELOCITY = 0.15;
const DAMPING = 0.98;

function FloatingCubes({ theme }: { theme: string | undefined }) {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Physics State
    const particles = useMemo(() => {
        const data = [];
        for (let i = 0; i < CUBE_COUNT; i++) {
            // Initial distribution widely spread
            data.push({
                x: (Math.random() - 0.5) * 35,
                y: (Math.random() - 0.5) * 20,
                z: (Math.random() - 0.5) * 5,
                // Increased base velocity (tripled from 0.02)
                vx: (Math.random() - 0.5) * 0.06,
                vy: (Math.random() - 0.5) * 0.06,
                vz: (Math.random() - 0.5) * 0.06,
                rx: Math.random() * Math.PI,
                ry: Math.random() * Math.PI,
                rz: Math.random() * Math.PI,
                vrx: (Math.random() - 0.5) * 0.05,
                vry: (Math.random() - 0.5) * 0.05,
                vrz: (Math.random() - 0.5) * 0.05,
                scale: 0.5 + Math.random() * 0.5,
                originalScale: 0.5 + Math.random() * 0.5, // Store for respawn
                shattered: false,
                shatterTime: 0
            });
        }
        return data;
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;

        // Dynamic boundaries based on actual viewport
        const { width, height } = state.viewport;
        const limitX = width / 2; // Full width
        const limitY = height / 2; // Full height

        // Mouse influence
        const { x: mouseX, y: mouseY } = state.pointer;
        // Project normalized mouse (-1 to 1) to viewport coordinates
        const targetX = (mouseX * width) / 2;
        const targetY = (mouseY * height) / 2;

        // Physics Update Loop
        for (let i = 0; i < CUBE_COUNT; i++) {
            const p = particles[i];

            // 0. Shatter/Respawn Logic
            if (p.shattered) {
                p.scale *= 0.8; // Fast shrink
                if (p.scale < 0.05) {
                    p.shattered = false;
                    p.scale = 0.01;
                    // Respawn logic - place somewhere safely inside view
                    // Try to spawn away from mouse if possible
                    p.x = (Math.random() - 0.5) * width * 0.9;
                    p.y = (Math.random() - 0.5) * height * 0.9;
                    p.vx = (Math.random() - 0.5) * 0.05;
                    p.vy = (Math.random() - 0.5) * 0.05;
                }
            } else if (p.scale < p.originalScale) {
                p.scale += (p.originalScale - p.scale) * 0.1; // Grow back
            }

            // 1. Mouse/Cursor Repulsion
            const dx = targetX - p.x;
            const dy = targetY - p.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < FORCE_RADIUS * FORCE_RADIUS) {
                const dist = Math.sqrt(distSq);
                const force = (FORCE_RADIUS - dist) / FORCE_RADIUS;
                const angle = Math.atan2(dy, dx);

                // Reduced push strength (was 0.025)
                const pushStrength = 0.012;
                p.vx -= Math.cos(angle) * force * pushStrength;
                p.vy -= Math.sin(angle) * force * pushStrength;

                // Reduced rotation kick (was 0.1)
                p.vrx += Math.random() * force * 0.05;
                p.vry += Math.random() * force * 0.05;

                // Check for shatter (high velocity impact from cursor 'hit')
                // Simplified: if current velocity > threshold, shatter.
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > MAX_VELOCITY * 1.5 && !p.shattered) {
                    p.shattered = true;
                }
            }

            // **NEW**: Ambient Motion / Continuous Drift
            // Adds a tiny random impulse every frame to prevent settling
            p.vx += (Math.random() - 0.5) * 0.002;
            p.vy += (Math.random() - 0.5) * 0.002;
            p.vz += (Math.random() - 0.5) * 0.002;

            // 2. Integration
            p.x += p.vx;
            p.y += p.vy;
            p.z += p.vz;
            p.rx += p.vrx;
            p.ry += p.vry;
            p.rz += p.vrz;

            // 3. Damping and Auto-Movement
            p.vx *= DAMPING;
            p.vy *= DAMPING;
            p.vz *= DAMPING;
            p.vrx *= 0.95;
            p.vry *= 0.95;
            p.vrz *= 0.95;

            p.rx += 0.002;
            p.ry += 0.002;

            // REMOVED: Center pull force
            // p.vx -= p.x * 0.0001;
            // p.vy -= p.y * 0.0001;

            // 4. Hard Boundaries (Dynamic)
            if (p.x > limitX) { p.x = limitX; p.vx *= -0.9; }
            if (p.x < -limitX) { p.x = -limitX; p.vx *= -0.9; }
            if (p.y > limitY) { p.y = limitY; p.vy *= -0.9; }
            if (p.y < -limitY) { p.y = -limitY; p.vy *= -0.9; }
            // Z boundaries fixed
            if (p.z > 5) { p.z = 5; p.vz *= -0.9; }
            if (p.z < -5) { p.z = -5; p.vz *= -0.9; }

            // 5. Cubes update
            dummy.position.set(p.x, p.y, p.z);
            dummy.rotation.set(p.rx, p.ry, p.rz);
            dummy.scale.setScalar(p.scale * CUBE_SIZE);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }

        // 6. Collision Detection
        for (let i = 0; i < CUBE_COUNT; i++) {
            for (let j = i + 1; j < CUBE_COUNT; j++) {
                const p1 = particles[i];
                const p2 = particles[j];

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dz = p1.z - p2.z;

                const distSq = dx * dx + dy * dy + dz * dz;
                const minDist = (p1.scale * CUBE_SIZE + p2.scale * CUBE_SIZE) * 0.85;

                if (distSq < minDist * minDist) {
                    const dist = Math.sqrt(distSq);
                    const overlap = minDist - dist;
                    const force = overlap * 0.08;

                    const nx = dx / dist;
                    const ny = dy / dist;
                    const nz = dz / dist;

                    p1.vx += nx * force;
                    p1.vy += ny * force;
                    p1.vz += nz * force;

                    p2.vx -= nx * force;
                    p2.vy -= ny * force;
                    p2.vz -= nz * force;

                    // Transfer energy and rotate
                    p1.vrx += (Math.random() - 0.5) * 0.05;
                    p2.vrx += (Math.random() - 0.5) * 0.05;
                }
            }
        }

        mesh.current.instanceMatrix.needsUpdate = true;
    });

    // Theme-based colors
    // Light Mode: Darker Indigo (#4338ca) for visibility
    // Dark Mode: Brighter/Lighter Blue (#c7d2fe) for contrast
    const isDark = theme === 'dark';
    const cubeColor = isDark ? '#c7d2fe' : '#4f46e5';

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, CUBE_COUNT]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color={cubeColor}
                transparent
                opacity={0.9} // Increased slightly
                roughness={0.05} // Very smooth/shiny
                metalness={0.4}  // Reflective
            />
        </instancedMesh>
    );
}

function Lights({ theme }: { theme: string | undefined }) {
    const light = useRef<THREE.PointLight>(null);
    const isDark = theme === 'dark';

    useFrame(({ pointer, viewport }) => {
        if (light.current) {
            light.current.position.x = (pointer.x * viewport.width) / 2;
            light.current.position.y = (pointer.y * viewport.height) / 2;
        }
    });

    return (
        <>
            <ambientLight intensity={isDark ? 0.2 : 0.5} /> {/* Lower ambient to make highlights pop */}
            <pointLight
                ref={light}
                position={[0, 0, 4]} // Closer to camera (was 10) for dramatic falloff
                intensity={isDark ? 8 : 10} // Higher intensity close up
                distance={15} // Shorter range creates a "flashlight" pool of light
                decay={2}
                color="#818cf8"
            />
            {/* Rim Light / Back Light for edge definition */}
            <pointLight position={[10, 10, -5]} intensity={isDark ? 2 : 3} color="#c084fc" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
        </>
    );
}

export function HeroScene() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="absolute inset-0 z-0 h-full w-full" />;

    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                dpr={[1, 1.5]}    // Optimize pixel ratio
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <Lights theme={resolvedTheme} />
                <FloatingCubes theme={resolvedTheme} />
                {/* Fog for depth fading */}
                <fog attach="fog" args={[resolvedTheme === 'dark' ? '#000000' : '#ffffff', 10, 35]} />
            </Canvas>
        </div>
    );
}
