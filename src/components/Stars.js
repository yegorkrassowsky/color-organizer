import Star from "./Star"

const Stars = ({ rating }) => {
  return (
    <div className="stars-rating">
      {[...Array(5)].map((n, i) => (
        <Star key={i} selected={i < rating} />
      ))}
    </div>
  )
}

export default Stars
