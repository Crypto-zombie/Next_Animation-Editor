'use client'
import React from 'react'
import Time from '@/components/Time'
import XSlider from '@/components/XSlider'
import YSlider from '@/components/YSlider'
import { useAdjust } from '@/store/useAdjust'

export default function Control() {
  const { addPosition } = useAdjust()
  return (
    <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center space-y-2 bg-black bg-opacity-50 p-4 text-white">
      <XSlider />
      <YSlider />
      <Time />
      <div
        className="bg-zinc-900 p-2 hover:bg-zinc-800"
        onClick={() => addPosition()}>
        Add Effect
      </div>
    </div>
  )
}
