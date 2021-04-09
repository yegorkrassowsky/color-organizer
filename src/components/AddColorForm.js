import {useState, useRef} from "react"
import { useStore } from '../store';

const AddColorForm = () => {
  const { addColor } = useStore()
  const defaultColor = "#ffffff"
  const _title = useRef(null)
  const [color, setColor] = useState(defaultColor)

  function newColor() {
    if ( _title.current.value ) {
      addColor(_title.current.value, color)
      _title.current.value = ""
    } else {
      alert("Please, fill the Title")
      _title.current.focus()
    }
  }
  return (
    <div className="row mt-3">
      <div className="col-sm-10">
        <input type="text" className="form-control" placeholder="Color Title" ref={_title} />
      </div>
      <div className="col-sm">
        <input type="color" className="form-control form-control-color" value={color} onChange={e => setColor(e.target.value)} />
      </div>
      <div className="col-sm-auto">
        <button type="submit" className="btn btn-primary" onClick={newColor}>
          Add
        </button>
      </div>
    </div>
  )
}

export default AddColorForm
