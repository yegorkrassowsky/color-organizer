import React, {useEffect, useState} from 'react';

const Toast = ({id, message, color = false, onRemove=f=>f}) => {
  const [toastOut, setToastOut] = useState('')
  useEffect(()=>{
    setTimeout(()=>{
      setToastOut('out-right')
      setTimeout(()=>onRemove(id), 400)
    }, 5000)
  })
  const style = color ? {backgroundColor: color, color: (bwColor(color) ? "#000" : "#fff")} : {}
  const whiteClose = color && bwColor(color) ? "" : "btn-close-white"
  return (
  <div style={style} className={`toast show align-items-center border-0 ${toastOut}`} role="alert" aria-live="assertive" aria-atomic="true">
    <div className="d-flex">
      <div className="toast-body">{message}</div>
      <button onClick={()=>onRemove(id)} type="button" className={`btn-close me-2 m-auto ${whiteClose}`} data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
  )
}

const bwColor = (hex) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  let r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16)
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186
}

export default Toast