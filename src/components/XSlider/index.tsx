/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSlider from '@/components/Slider'
import { useAdjust } from '@/store/useAdjust'

export default function XSlider() {
  const { x, setX } = useAdjust()
  return (
    <CustomSlider
      max={3}
      min={-3}
      step={0.1}
      text={'X'}
      value={x}
      defaultValue={x ?? 1}
      onChange={(nextValues: any) => {
        setX(nextValues)
      }}
    />
  )
}
