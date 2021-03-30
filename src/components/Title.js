import {useState, useRef, useEffect} from "react"

const Title = ({ title, onRename=f=>f, onRemove=f=>f }) => {
  const _title = useRef(null)
  const prevTitleRef = useRef(title)
  const [toggleEdit, setEdit] = useState(false)
  useEffect(()=>{
    window.addEventListener("keydown", keydownHandler)
    return () => window.removeEventListener("keydown", keydownHandler)
  })
  useEffect(()=>{
    if(toggleEdit) _title.current.focus()
  }, [toggleEdit])
  function keydownHandler(event) {
    if(event.key === "Enter"){
      endEdit()
    }
  }
  function endEdit() {
    if(title.trim()){
      prevTitleRef.current = title
    } else {
      onRename(prevTitleRef.current)
    }
    setEdit(false)
  }
  return (
    <div className="card-body text-center">
    {toggleEdit ? 
      (<div className="mb-2"><input className="form-control d-inline-block w-auto text-center" value={title} onChange={(e)=>onRename(e.target.value)} onBlur={endEdit} ref={_title} type="text"></input></div>) : 
      (<h5 className="card-title" onClick={()=>setEdit(true)}>{title}</h5>)}
      <button className="btn btn-primary" onClick={onRemove}>Delete</button>
    </div>
    )
}

export default Title
