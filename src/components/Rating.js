import Stars from "./Stars.js"

const Rating = ({ rating, onRate=f=>f }) => {
  return (
    <div className="rating">
      <Stars rating={rating} onRate={onRate} />
      <div className="stars-number">{rating} of 5 stars</div>
    </div>
  )
}

export default Rating
