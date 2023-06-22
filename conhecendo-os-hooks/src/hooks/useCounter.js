// Criando um hook personalizado
import { useState } from 'react'

function getInitialValue() {
  console.log("obtendo o valor inicial")
  return 1 + 1
}

export default function useCounter() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(() => getInitialValue())

  const increment = () => {
    setCount(count + 1)
  }

  // retornando a variável e a função
  return { count, increment }
}