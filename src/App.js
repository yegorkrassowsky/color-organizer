import "./App.css"
import AddColorForm from "./components/AddColorForm"
import ColorCards from "./components/ColorCards"
import ToastList from "./components/toast/ToastList"
import { StateProvider } from './store'

function App() {
  return (
    <div className="App">
      <StateProvider>
        <div className="container">
          <AddColorForm />
          <ColorCards />
        </div>
        <ToastList />
      </StateProvider>
    </div>
  )
}

export default App
