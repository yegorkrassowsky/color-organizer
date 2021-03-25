import Rating from "./Rating"

const ColorCard = ({ color }) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <Rating rating={color.rating} />
        <div
          className="card-color"
          style={{ backgroundColor: color.color }}
        ></div>
        <div className="card-body text-center">
          <h5 className="card-title">{color.title}</h5>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default ColorCard
