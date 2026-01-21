"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles({ count = 200 }) {
    const mesh = useRef<THREE.Points>(null);

    // Generate random positions
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;     // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (!mesh.current) return;

        // Slow rotation
        mesh.current.rotation.y += 0.0003;
        mesh.current.rotation.x += 0.0003;

        // Interactive movement
        const { x, y } = state.pointer;
        mesh.current.rotation.x += y * 0.001;
        mesh.current.rotation.y += x * 0.001;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#3b82f6" // blue-500
                sizeAttenuation
                transparent
                opacity={0.6}
            />
        </points>
    );
}

export function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <group position={[0, 0, 0]}>
                    <Particles count={300} />
                </group>
            </Canvas>
        </div>
    );
}
