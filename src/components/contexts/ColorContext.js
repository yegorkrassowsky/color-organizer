import React, {useState, useContext} from "react"
import {v4} from "uuid"
import defaultColors from "../../data/colors"

const ColorContext = React.createContext()

export const useColor = () => {
  return useContext(ColorContext)
}

export const ColorProvider = ({children}) => {
  const [toasts, setToasts] = useState([])
  const [colors, setColors] = useState( defaultColors )
  function addToast( message, color = false ) {
    setToasts( prevToasts => [...prevToasts, 
      {
        id: v4(),
        message,
        color,
      }])
  }
  function removeToast(id) {
    setToasts( prevToasts => prevToasts.filter(
      data => data.id !== id
    ) )
  }
  function addColor( title, color ) {
    setColors( prevColors => [...prevColors, 
      {
        id: v4(),
        title,
        color,
        rating: 0
      }])
  }
  function removeColor(id) {
    setColors( prevColors => prevColors.filter(
      color => color.id !== id
    ) )
  }
  function rateColor(color, rating) {
    if(rating !== color.rating) {
      setColors( prevColors => prevColors.map(
        prevColor => (prevColor.id !== color.id) ? prevColor : {...prevColor, rating}
      ) )
      addToast(`Color rating changed: ${color.rating} -> ${rating}`, color.color)
    }
  }
  function renameColor(color, title) {
    if(title !== color.title) {
      setColors( prevColors => prevColors.map(
        prevColor => (prevColor.id !== color.id) ? prevColor : {...prevColor, title}
      ) )
      addToast(`Color title changed: ${color.title} -> ${title}`, color.color)
    }
  }

  return (<ColorContext.Provider value={{colors, addColor, removeColor, rateColor, renameColor, toasts, addToast, removeToast}}>{children}</ColorContext.Provider>)
}

