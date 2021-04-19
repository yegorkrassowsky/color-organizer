import {useState, useRef, useEffect} from "react"

const Title = ({ title, onRename=f=>f, onRemove=f=>f }) => {
  const _title = useRef(null)
  const prevTitleRef = useRef(title)
  const [toggleEdit, setEdit] = useState(false)
  useEffect(()=>{
    if(toggleEdit) _title.current.focus()
  }, [toggleEdit])
  function keyDownHandler(event) {
    if(event.key === "Enter"){
      endEdit()
    }
  }
  function endEdit() {
    const title = _title.current.value
    if(title.trim()){
      prevTitleRef.current = title
      onRename(title)
    }
    setEdit(false)
  }
  return (
    <div className="card-body text-center">
      <div className="title-container">
    {toggleEdit ? 
      (<input className="form-control d-inline-block text-center" defaultValue={title} onBlur={endEdit} onKeyDown={(e)=>keyDownHandler(e)} ref={_title} type="text"></input>) : 
      (<h5 className="card-title" onClick={()=>setEdit(true)}>{title}</h5>)}
      </div>
      <button className="btn btn-primary" onClick={onRemove}>Delete</button>
    </div>
    )
}

export default Title
