'use client'
import Marks from '@/components/Marks'
import React from 'react'
import Time from '@/components/Time'
import XSlider from '@/components/XSlider'
import YSlider from '@/components/YSlider'
import { CgRecord } from '@react-icons/all-files/cg/CgRecord'
import { FaPlay } from '@react-icons/all-files/fa/FaPlay'
import { FaStop } from '@react-icons/all-files/fa/FaStop'
import { FaTrash } from '@react-icons/all-files/fa/FaTrash'
import { useAdjust } from '@/store/useAdjust'

export default function Control() {
  const { addPosition, status, setStatus, clearList } = useAdjust()
  return (
    <div className="absolute right-2 top-1/2 flex -translate-y-1/2 flex-col items-center justify-center space-y-2 bg-black bg-opacity-50 p-8 text-white">
      <XSlider />
      <YSlider />
      <Time />
      <Marks />
      <div className="grid grid-cols-3 items-center justify-between gap-2 text-xs">
        <div
          className="flex items-center justify-center space-x-2 bg-zinc-900 p-2 hover:bg-zinc-800"
          onClick={() => addPosition()}>
          <CgRecord className="h-4 w-4" />
          <p>Record</p>
        </div>
        <div
          className="flex items-center justify-center space-x-2 bg-zinc-900 p-2 hover:bg-zinc-800"
          onClick={() => setStatus(!status)}>
          {status ? (
            <>
              <FaStop className="h-3 w-3" />
              <p>Pause</p>
            </>
          ) : (
            <>
              <FaPlay className="h-3 w-3" />
              <p>Play</p>
            </>
          )}
        </div>
        <div
          className="flex items-center justify-center space-x-2 bg-zinc-900 p-2 hover:bg-zinc-800"
          onClick={() => clearList()}>
          <FaTrash className="h-3 w-3" />
          <p>Clear</p>
        </div>
      </div>
    </div>
  )
}
