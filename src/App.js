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
  function removeColor(id) {
    setColors( prevColors => prevColors.filter(
      color => color.id !== id
    ) )
  }
  function rateColor(id, rating) {
    setColors( prevColors => prevColors.map(
      color => (color.id !== id) ? color : {...color, rating}
    ) )
  }
  function renameColor(id, title) {
    setColors( prevColors => prevColors.map(
      color => (color.id !== id) ? color : {...color, title}
    ) )
  }
  return (
    <div className="App">
      <div className="container">
        <AddColorForm onNewColor={addColor} />
        <ColorCards colors={colors} onRemove={removeColor} onRate={rateColor} onRename={renameColor} />
      </div>
    </div>
  )
}

export default App
