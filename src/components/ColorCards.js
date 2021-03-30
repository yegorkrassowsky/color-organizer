import ColorCard from "./ColorCard"

const ColorCards = ({ colors=[], onRemove=f=>f, onRate=f=>f, onRename=f=>f }) => {
  return (
    <div className="row mt-3">
      {(colors.length) ?
            colors.map((color) => (
              <ColorCard key={color.id} color={color} onRemove={() => onRemove(color.id)} onRate={(rating) => onRate(color.id, rating)} onRename={(title) => onRename(color.id, title)} />
            ))
      :
      <p>No colors listed. Add a color.</p>
      }
    </div>
  )
}

export default ColorCards
