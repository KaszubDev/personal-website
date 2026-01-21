"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ count = 300 }) {
    const mesh = useRef<THREE.Points>(null);
    const light = useRef<THREE.PointLight>(null);

    // Generate initial random positions
    const initialPositions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
        }
        return pos;
    }, [count]);

    // Clone to mutable positions for animation
    const positions = useMemo(() => new Float32Array(initialPositions), [initialPositions]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Current mouse position in 3D space (approximate projection)
        const { x, y } = state.pointer;
        const mouseX = x * 10;
        const mouseY = y * 10;

        // Animate individual particles
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const px = initialPositions[i3];
            const py = initialPositions[i3 + 1];
            const pz = initialPositions[i3 + 2];

            // Distance to mouse
            const dx = mouseX - positions[i3];
            const dy = mouseY - positions[i3 + 1];
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Magnetic Force Radius
            const forceRadius = 2.5; // Reduced from 4

            if (dist < forceRadius) {
                const force = (forceRadius - dist) / forceRadius;
                const angle = Math.atan2(dy, dx);

                // Push away (reduced intensity)
                positions[i3] -= Math.cos(angle) * force * 0.08;
                positions[i3 + 1] -= Math.sin(angle) * force * 0.08;
            } else {
                // Return to original position (lerp)
                positions[i3] += (px - positions[i3]) * 0.05;
                positions[i3 + 1] += (py - positions[i3 + 1]) * 0.05;
            }
            // Z-axis gentle wave (unaffected by mouse)
            positions[i3 + 2] = pz + Math.sin(state.clock.elapsedTime + px) * 0.2;
        }

        // Apply attribute updates
        mesh.current.geometry.attributes.position.needsUpdate = true;

        // Follow mouse with subtle light
        if (light.current) {
            light.current.position.x = x * 5;
            light.current.position.y = y * 5;
        }
    });

    return (
        <>
            <pointLight ref={light} distance={10} intensity={2} color="#4f46e5" />
            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.06}
                    color="#60a5fa"
                    sizeAttenuation
                    transparent
                    opacity={0.8}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
                <Particles count={300} />
            </Canvas>
        </div>
    );
}
