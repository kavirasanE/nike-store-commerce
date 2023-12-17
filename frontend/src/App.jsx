import React from 'react'
import { Hero } from './components'
import { heroapi ,popularsales,toprateslaes } from './data/data.js'
import Sales from './components/Sales.jsx'

const App = () => {
  return (
    <>
    <main className='flex  flex-col gap-16 relative'>
      <Hero heroapi={heroapi} />
      <Sales  endpoint ={popularsales} ifExists />
      <Sales  endpoint ={toprateslaes} />
    </main>
    </>
  )
}

export default App
