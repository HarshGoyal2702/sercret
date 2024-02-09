"use client";
import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'
const StarBackground = (props: any) => {
    const ref: any = useRef()
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

    // Move useFrame hook inside the component
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial transparent size={0.002} color="$fff" sizeAttenuation={true} depthWrite={false} />
            </Points>
        </group>
    )
}

const StarCanvas = () => (
    <div className='w-full h-auto fixed inset-0 z-[20]'>
        <Canvas camera={{ position: [0, 0, 1] }}>
            <ambientLight />
            <StarBackground />
        </Canvas>
    </div>
)

export default StarCanvas
