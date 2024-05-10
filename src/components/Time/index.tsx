/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSlider from '@/components/Slider'
import { useState } from 'react'

export default function Time() {
  const [length, setLength] = useState(0)
  return (
    <CustomSlider
      max={5}
      min={0}
      step={0.1}
      text={'Timeline'}
      value={length}
      defaultValue={length ?? 1}
      onChange={(nextValues: any) => {
        setLength(nextValues)
      }}
    />
  )
}
