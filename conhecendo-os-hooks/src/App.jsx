import './App.css'
import { useState } from 'react'
import useCounter from './hooks/useCounter'

// Regra 1: Onde usar os hooks
// Só funciona dentro do componente. Ex: Dentro do function App()

// Regra 2: A ordem dos hooks

function App() {
  // hook personalizado
  const counter = useCounter()
  
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
