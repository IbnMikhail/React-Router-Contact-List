import { useState } from 'react'
import Header from './Header'
import Features from './Features'
import Row from './Row'
import Faq from './Faq'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />  
      <Features />
      <Row />
      <Faq />
      </div>
      
    </>
  )
}

export default App
