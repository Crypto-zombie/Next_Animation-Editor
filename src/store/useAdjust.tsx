/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

type Position = {
  X: number
  Y: number
  DeltaTime: number
}

export type initialState = {
  x: number
  y: number
  time: number
  animList: Array<Position>
  status: boolean
  frame: number
  currentIndex: number
  setX: (value: number) => void
  setY: (value: number) => void
  setTime: (value: number) => void
  setFrame: (value: number) => void
  setCurrentIndex: (value: number) => void
  clearList: () => void
  setValue: (value: Position) => void
  addPosition: () => void
  setStatus: (value: boolean) => void
}

export const useAdjust = create<initialState>((set) => ({
  x: 0,
  y: 0,
  frame: 0,
  currentIndex: 0,
  animList: [
    {
      X: 0,
      Y: 0,
      DeltaTime: 0
    }
  ],
  time: 0,
  status: false,
  setFrame: (value: number) =>
    set((state: any) => ({
      ...state,
      frame: value
    })),
  setCurrentIndex: (value: number) =>
    set((state: any) => ({
      ...state,
      currentIndex: value
    })),
  setX: (value: number) =>
    set((state: any) => ({
      ...state,
      x: value
    })),
  setTime: (value: number) => {
    set((state: any) => ({
      ...state,
      time: value
    }))
  },
  setY: (value: number) =>
    set((state: any) => ({
      ...state,
      y: value
    })),
  setValue: (value: Position) =>
    set((state: any) => ({
      ...state,
      animList: value
    })),

  clearList: () =>
    set((state: any) => ({
      ...state,
      animList: [
        {
          X: 0,
          Y: 0,
          DeltaTime: 0
        }
      ]
    })),
  setStatus: (value: boolean) =>
    set((state: any) => ({
      ...state,
      status: value
    })),
  addPosition: () =>
    set((state) => {
      const newAnimList = [
        ...state.animList.filter((item) => item.DeltaTime !== state.time),
        {
          X: state.x,
          Y: state.y,
          DeltaTime: state.time
        }
      ]

      newAnimList.sort((a, b) => a.DeltaTime - b.DeltaTime)

      return {
        ...state,
        animList: newAnimList
      }
    })
}))
