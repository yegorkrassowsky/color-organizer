import React, {useRef} from "react"
import Rating from "./Rating"
import Title from "./Title"
import {useColor} from "../contexts/ColorContext"

const ColorCard = ( { color } ) => {
  const { removeColor, rateColor, renameColor } = useColor();
  const cardRef = useRef(null)
  const {title, rating} = color
  return (
    <div className="col-sm-4">
      <div className="card" ref={cardRef}>
        <Rating rating={rating} onRate={(rating)=>rateColor(color, rating)} />
        <div
          className="card-color"
          style={{ backgroundColor: color.color }}
        ></div>
        <Title title={title} onRename={(title)=>renameColor(color, title)} onRemove={()=>removeColor(color)} />
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.color.rating === nextProps.color.rating && prevProps.color.title === nextProps.color.title
}

export default React.memo( ColorCard, areEqual )
