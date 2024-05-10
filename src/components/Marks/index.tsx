import Mark from '@/components/Mark'
import React from 'react'
import { useAdjust } from '@/store/useAdjust'

export default function Marks() {
  const { animList } = useAdjust()
  return (
    <div className="w-60 -translate-y-3">
      {animList.map((item, index) => (
        <Mark
          key={index}
          deltaTime={item.DeltaTime}
        />
      ))}
    </div>
  )
}
