import React, {useRef} from "react"
import Rating from "./Rating"
import Title from "./Title"

const ColorCard = ( { color, onRemove=f=>f, onRate=f=>f, onRename=f=>f} ) => {
  const cardRef = useRef(null)
  const {title, rating} = color
  return (
    <div className="col-sm-4">
      <div className="card" ref={cardRef}>
        <Rating rating={rating} onRate={onRate} />
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
