import ColorCard from "./ColorCard"

const ColorCards = ({ colors=[], onRemove=f=>f, onRate=f=>f }) => {
  return (
    <div className="row mt-3">
      {(colors.length) ?
            colors.map((color) => (
              <ColorCard key={color.id} color={color} onRemove={() => onRemove(color.id)} onRate={(rating) => onRate(color.id, rating)} />
            ))
      :
      <p>No colors listed. Add a color.</p>
      }
    </div>
  )
}

export default ColorCards
