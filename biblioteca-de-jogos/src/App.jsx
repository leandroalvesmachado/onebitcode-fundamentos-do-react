import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

function App() {
  // importando do hooks as funções e variaveis para utilizar no componente App 
  const {games, addGame, removeGame} = useGameCollection();

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm
        addGame={addGame}
      />
      <div className="games">
        {games.length > 0 ? 
          games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            cover={game.cover}
            onRemove={() => removeGame(game.id)}
          />
          ))
          :
          (
            <h2>Nenhum game cadastrado</h2>
          )
        }
      </div>
    </div>
  )
}

export default App