import ColorCard from "./ColorCard"
import { useStore } from '../store';

const ColorCards = () => {
  const { state } = useStore()
  const colors = state.colors
  return (
    <div className="row mt-3 gy-4">
      {(colors.length) ?
        colors.map((color) => (
          <ColorCard
            key={color.id}
            color={color} 
          />
        ))
      :
        <p>No colors listed. Add a color.</p>
      }
    </div>
  )
}

export default ColorCards
