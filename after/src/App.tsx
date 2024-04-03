import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BurnPage from  './Pages/BurnPage.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BurnPage/>
    </>
  )
}

export default App
