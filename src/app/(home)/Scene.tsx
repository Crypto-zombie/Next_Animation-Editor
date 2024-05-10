'use client'
import AnimateModel from './AnimateModel'
import Model from './Model'
import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <AnimateModel />
      <Model />
    </Canvas>
  )
}
