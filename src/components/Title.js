import {useState, useRef, useEffect} from "react"

const Title = ({ title, onRename=f=>f, onRemove=f=>f }) => {
  const _title = useRef(null)
  const [toggleEdit, setEdit] = useState(false)
  useEffect(()=>{
    if(toggleEdit) _title.current.focus()
  }, [toggleEdit])
  return (
    <div className="card-body text-center">
    {toggleEdit ? 
      (<div className="mb-2"><input className="form-control d-inline-block w-auto text-center" value={title} onChange={(e)=>onRename(e.target.value)} onBlur={() => setEdit(false)} ref={_title} type="text"></input></div>) : 
      (<h5 className="card-title" onClick={()=>setEdit(true)}>{title}</h5>)}
      <button className="btn btn-primary" onClick={onRemove}>Delete</button>
    </div>
    )
}

export default Title
