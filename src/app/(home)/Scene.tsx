'use client'
import AnimateModel from './AnimateModel'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas>
      <AnimateModel />
      <Environment preset="city" />
      {/* <OrbitControls /> */}
    </Canvas>
  )
}
