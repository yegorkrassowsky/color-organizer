import React, {useEffect, useState} from "react"

const Toast = ({id, message, color = false, onRemove=f=>f}) => {
  const [toastOut, setToastOut] = useState(false)
  const dismissToast = (id) => {
    setToastOut(true)
    setTimeout(()=>onRemove(id), 400)
  }
  useEffect(()=>{
    let timer = setTimeout(() => dismissToast(id), 5000)
    return () => {
      clearTimeout(timer)
    }
  })

  const style = color ? {backgroundColor: color, color: (bwColor(color) ? "#000" : "#fff")} : {}
  const whiteClose = color && bwColor(color) ? "" : "btn-close-white"
  const toastOutClass = toastOut ? "out-right" : ""
  return (
  <div style={style} className={`toast show align-items-center border-0 ${toastOutClass}`} role="alert" aria-live="assertive" aria-atomic="true">
    <div className="d-flex">
      <div className="toast-body">{message}</div>
      <button onClick={()=>dismissToast(id)} type="button" className={`btn-close me-2 m-auto ${whiteClose}`} data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
  )
}

function areEqual(prevProps, nextProps) {
  return prevProps.id === nextProps.id
}

export default React.memo( Toast, areEqual )

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
