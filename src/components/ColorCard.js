import React, {useRef} from "react"
import { useStore } from '../store';
import Rating from "./Rating"
import Title from "./Title"

const ColorCard = ( { color } ) => {
  const { removeColor, renameColor, rateColor } = useStore()
  const cardRef = useRef(null)
  const {title, rating} = color
  return (
    <div className="col-sm-4">
      <div className="card" ref={cardRef}>
        <Rating rating={rating} onRate={(rating)=>rateColor(color.id, rating)} />
        <div
          className="card-color"
          style={{ backgroundColor: color.color }}
        ></div>
        <Title title={title} onRename={(title)=>renameColor(color.id, title)} onRemove={()=>removeColor(color.id)} />
      </div>
    </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.color.rating === nextProps.color.rating && prevProps.color.title === nextProps.color.title
}

export default React.memo( ColorCard, areEqual )
