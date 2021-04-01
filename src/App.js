import "./App.css"
import AddColorForm from "./components/AddColorForm"
import ColorCards from "./components/ColorCards"
import ToastList from "./components/toast/ToastList"
import {ColorProvider} from "./contexts/ColorContext"

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <div className="container">
          <AddColorForm />
          <ColorCards />
        </div>
        <ToastList />
      </ColorProvider>
    </div>
  )
}

export default App
