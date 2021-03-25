import "./App.css"
import defaultColors from "./data/colors"
import AddColorForm from "./components/AddColorForm"
import ColorCards from "./components/ColorCards"
import {v4} from "uuid"
import {useState} from "react"

function App() {
  const [colors, setColors] = useState( defaultColors )
  function addColor( title, color ) {
    setColors( prevColors => [...prevColors, 
      {
        id: v4(),
        title,
        color,
        rating: 0
      }])
  }
  return (
    <div className="App">
      <div className="container">
        <AddColorForm onNewColor={addColor} />
        <ColorCards colors={colors} />
      </div>
    </div>
  )
}

export default App
