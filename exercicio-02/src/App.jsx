import Card from './components/Card'
import Button from './components/Button'
import swPosterImg from './assets/poster1.jpg'
import esbPosterImg from './assets/poster2.jpg'
import rotjPosterImg from './assets/poster3.jpg'

function App() {
  return (
    // Para nao poluir o html com divs (Fragment)
    <>
      <h1>Exercício 2</h1>
      <Button text="Ir ao Blog" />
      <Card 
        title="Pôster: Star Wars (1977)"
        poster={swPosterImg}
      />
      <Card
        title="Pôster: Empire Strikes Back (1980)"
        poster={esbPosterImg}
      />
      <Card
        title="Pôster: Return of the Jedi (1983)"
        poster={rotjPosterImg}
      />
    </>
  )
}

export default App
