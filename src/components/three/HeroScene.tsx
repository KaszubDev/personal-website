"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function Particles({ count = 300 }) {
    const mesh = useRef<THREE.Points>(null);
    const light = useRef<THREE.PointLight>(null);

    // Use Refs for logic to avoid React state mutation rules on buffers
    const initialPositionsRef = useRef<Float32Array | null>(null);

    useEffect(() => {
        if (!mesh.current) return;

        const pos = new Float32Array(count * 3);
        const init = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 15;
            const z = (Math.random() - 0.5) * 15;

            init[i * 3] = x;
            init[i * 3 + 1] = y;
            init[i * 3 + 2] = z;

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }

        initialPositionsRef.current = init;

        // Imperatively update the geometry attribute
        // This avoids passing a mutable array through React props/state
        if (mesh.current.geometry) {
            mesh.current.geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        }
    }, [count]);

    useFrame((state) => {
        if (!mesh.current || !mesh.current.geometry || !initialPositionsRef.current) return;

        // Get the current positions from the geometry attribute directly
        const positionAttribute = mesh.current.geometry.getAttribute('position') as THREE.BufferAttribute;
        if (!positionAttribute) return;

        const positions = positionAttribute.array as Float32Array;
        const initialPositions = initialPositionsRef.current;

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

            const forceRadius = 2.5;

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
        positionAttribute.needsUpdate = true;

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
                <bufferGeometry />
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
