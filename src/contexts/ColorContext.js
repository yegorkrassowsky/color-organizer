import React, {useContext} from "react"
import defaultColors from "../data/colors"
import useList from "../hooks/useList"

const ColorContext = React.createContext()

export const useColor = () => {
  return useContext(ColorContext)
}

export const ColorProvider = ({children}) => {
  const [toasts, addToast, removeToast] = useList()
  const [colors, newColor, deleteColor, changeColor] = useList( {rating: 0}, defaultColors )
  function addColor(props) {
    newColor(props)
    const {color, title} = props
    addToast({message: `New color added: ${title}`, color})
  }
  function removeColor(props) {
    const {id, title, color} = props
    deleteColor(id)
    addToast({message: `Color removed: ${title}`, color})
  }
  function rateColor({id, rating, color}, newRating) {
    if(newRating !== rating) {
      changeColor(id, {rating: newRating})
      addToast({message: `Color rating changed: ${rating} -> ${newRating}`, color})
    }
  }
  function renameColor({id, title, color}, newTitle) {
    if(newTitle !== title) {
      changeColor(id, {title: newTitle})
      addToast({message: `Color title changed: ${title} -> ${newTitle}`, color})
    }
  }

  return (<ColorContext.Provider value={{colors, addColor, removeColor, rateColor, renameColor, toasts, addToast, removeToast}}>{children}</ColorContext.Provider>)
}

