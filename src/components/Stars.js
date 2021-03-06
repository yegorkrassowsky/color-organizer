import Star from "./Star"

const Stars = ({ rating, onRate=f=>f }) => {
  return (
    <div className="stars-rating">
      {[...Array(5)].map((n, i) => (
        <Star key={i} selected={i < rating} onClick={()=>onRate(i+1)} />
      ))}
    </div>
  )
}

export default Stars
