import Panel from '@/components/Panel'
import Scene from './Scene'

export default async function HomePage() {
  return (
    <div className="h-screen w-screen select-none  bg-zinc-700">
      <Scene />
      <Panel />
    </div>
  )
}
