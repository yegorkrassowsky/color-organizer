import Stars from "./Stars.js"

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      <Stars rating={rating} />
      <div>{rating} of 5 stars</div>
    </div>
  )
}

export default Rating
