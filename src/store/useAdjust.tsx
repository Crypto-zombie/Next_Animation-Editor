/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'

type Position = {
  X: number
  Y: number
  DetalTime: number
}

export type initialState = {
  x: number
  y: number
  time: number
  animList: Array<Position>
  setX: (value: number) => void
  setY: (value: number) => void
  setTime: (value: number) => void
  clearList: () => void
  setValue: (value: Position) => void
  addPosition: () => void
}

export const useAdjust = create<initialState>((set) => ({
  x: 0,
  y: 0,
  animList: [],
  time: 0,
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
      animList: []
    })),
  addPosition: () =>
    set((state: any) => ({
      ...state,
      animList: [
        ...state.animList,
        {
          X: state.x,
          Y: state.y,
          Time: state.time
        }
      ]
    }))
}))
