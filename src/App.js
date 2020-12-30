import "./App.css"
import colors from "./data/colors"
import AddColorForm from "./components/AddColorForm"
import ColorCards from "./components/ColorCards"

function App() {
  return (
    <div className="App">
      <div className="container">
        <AddColorForm />
        <ColorCards colors={colors} />
      </div>
    </div>
  )
}

export default App
