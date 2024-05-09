'use client'
import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <Environment preset="city" />
      <OrbitControls />
    </Canvas>
  )
}
