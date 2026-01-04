import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Invitation from './Components/Invitation/Invitation'
import Countdown from './Components/Countdown/Countdown'
import Menu from './Components/Menu/Menu'
import Location from './Components/Location/Location'
import Information from './Components/Information/Information'
import WeddingTimeline from './Components/WeddingTimeline/WeddingTimeline'
// import LoadingPage from './Components/LoadingPage/LoadingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <LoadingPage/> */}
   <div>
    <Invitation />
    <Countdown />
    <WeddingTimeline />
    <Menu />
    <Location />
    <Information />
   </div>
    </>
  )
}

export default App
