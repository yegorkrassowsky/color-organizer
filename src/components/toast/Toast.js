import React, {useEffect} from 'react';

const Toast = ({id, message, color, onRemove=f=>f}) => {
  useEffect(()=>{
    setTimeout(()=>{
      onRemove(id)
    }, 5000)
  })
  const style = color ? {backgroundColor: color} : {}
  return (
  <div style={style} className="toast show align-items-center text-white border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div className="d-flex">
      <div className="toast-body">{message}</div>
      <button onClick={()=>onRemove(id)} type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
  )
}

export default Toast