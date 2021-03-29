import React, {useRef, useEffect} from "react"
import Rating from "./Rating"

const ColorCard = ( { color, onRemove=f=>f, onRate=f=>f } ) => {
  const cardRef = useRef(null)
  const prevRatingRef = useRef(false);
  useEffect(()=>{
    const prevRating = prevRatingRef.current;
    if(prevRating) {
      cardRef.current.style.borderColor = "red"
      alert(`${color.title}: rating ${prevRating} -> ${color.rating}`)
      cardRef.current.style.removeProperty("border-color")
    }
    prevRatingRef.current = color.rating
  })
  return (
    <div className="col-sm-4">
      <div className="card" ref={cardRef}>
        <Rating rating={color.rating} onRate={onRate} />
        <div
          className="card-color"
          style={{ backgroundColor: color.color }}
        ></div>
        <div className="card-body text-center">
          <h5 className="card-title">{color.title}</h5>
          <button className="btn btn-primary" onClick={onRemove}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default React.memo( ColorCard, (oldProps, newProps) => oldProps.color.rating === newProps.color.rating )
