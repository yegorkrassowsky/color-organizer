import ColorCard from "./ColorCard"

const ColorCards = ({ colors=[] }) => {
  console.log(colors)
  return (
    <div className="row mt-3">
      {(colors.length) ?
            colors.map((color) => (
              <ColorCard key={color.id} color={color} />
            ))
      :
      <p>No colors listed. Add a color.</p>
      }
    </div>
  )
}

export default ColorCards
