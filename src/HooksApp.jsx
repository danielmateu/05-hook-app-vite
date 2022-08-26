import { CounterApp } from './01-useState/CounterApp'
import './HooksApp.css'

export const HooksApp = () => {
  return (
    <>
    <div className="container">
      <div className="word"></div>
      <div className="word">I am...</div>
      <div className="word">THE DANGER!</div>
    </div>
    <CounterApp/>
    </>
    
  )
}
