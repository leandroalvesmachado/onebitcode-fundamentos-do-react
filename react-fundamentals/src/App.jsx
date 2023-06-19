import Title from "./components/Title"
import { Subtitle } from "./components/Subtitle"
import StatusText from "./components/StatusText"
import styles from "./App.module.css"

function sum(a, b) {
  return a + b
}

// PascalCase para componentes
// function Title() {
//   const tech = "React"
//   return <h1>{tech} is awesome!</h1>
// }

export default function App() {
  const tech = "React"
  const status = true

  return (
    // estilos com javascript do react
    // <div style={{
    //     backgroundColor: "#2c2c2d",
    //     display: "grid",
    //     minHeight: "100vh",
    //     placeContent: "center",
    //     textAlign: "center",
    //   }}
    // >
    <div className={styles.app}>
      <h1>{tech} is awesome!</h1>
      <h2>It's easy, like 1 + 1 is {1+1}</h2>
      <h2>It's easy, like 1 + 1 is {sum(1,1)}</h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
      <p>{true && "Text"}</p>
      <hr />
      <p>Abaixo utilizando componentes</p>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}
