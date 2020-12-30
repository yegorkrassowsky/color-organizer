import ColorCard from "./ColorCard"

const ColorCards = ({ colors }) => {
  console.log(colors)
  return (
    <div className="row mt-3">
      {colors.map((color) => (
        <div className="col-sm-4">
          <ColorCard color={color} />
        </div>
      ))}
    </div>
  )
}

export default ColorCards
