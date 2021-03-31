import "./App.css"
import defaultColors from "./data/colors"
import AddColorForm from "./components/AddColorForm"
import ColorCards from "./components/ColorCards"
import ToastList from "./components/ToastList"
import {v4} from "uuid"
import {useState} from "react"

function App() {
  const [toasts, setToasts] = useState([])
  const [colors, setColors] = useState( defaultColors )
  function addToast( message, color = false ) {
    setToasts( prevToasts => [...prevToasts, 
      {
        id: v4(),
        message,
        color,
      }])
  }
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
  function rateColor(color, rating) {
    if(rating !== color.rating) {
      setColors( prevColors => prevColors.map(
        prevColor => (prevColor.id !== color.id) ? prevColor : {...prevColor, rating}
      ) )
      addToast(`Color rating changed: ${color.rating} -> ${rating}`, color.color)
    }
  }
  function renameColor(color, title) {
    if(title !== color.title) {
      setColors( prevColors => prevColors.map(
        prevColor => (prevColor.id !== color.id) ? prevColor : {...prevColor, title}
      ) )
      addToast(`Color title changed: ${color.title} -> ${title}`, color.color)
    }
  }
  function removeToast(id) {
    setToasts( prevColors => prevColors.filter(
      data => data.id !== id
    ) )
  }
  return (
    <div className="App">
      <div className="container">
        <AddColorForm onNewColor={addColor} />
        <ColorCards colors={colors} onRemove={removeColor} onRate={rateColor} onRename={renameColor} />
      </div>
      <ToastList toasts={toasts} onRemove={removeToast} />
    </div>
  )
}

export default App
