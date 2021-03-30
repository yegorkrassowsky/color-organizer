import React, {useRef, useEffect} from "react"
import Rating from "./Rating"
import Title from "./Title"

const ColorCard = ( { color, onRemove=f=>f, onRate=f=>f, onRename=f=>f } ) => {
  const cardRef = useRef(null)
  const prevRatingRef = useRef(false);
  const {title, rating} = color
  function showStatus() {
    const prevRating = prevRatingRef.current;
    if(prevRating) {
      cardRef.current.style.borderColor = "red"
      alert(`${title}: rating ${prevRating} -> ${rating}`)
      cardRef.current.style.removeProperty("border-color")
    }
    prevRatingRef.current = rating
  }
  useEffect(showStatus, [rating])
  return (
    <div className="col-sm-4">
      <div className="card" ref={cardRef}>
        <Rating rating={color.rating} onRate={onRate} />
        <div
          className="card-color"
          style={{ backgroundColor: color.color }}
        ></div>
        <Title title={title} onRename={onRename} onRemove={onRemove} />
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.color.rating === nextProps.color.rating && prevProps.color.title === nextProps.color.title
}

export default React.memo( ColorCard, areEqual )
