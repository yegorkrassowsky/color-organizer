import {useState} from "react"
import {v4} from "uuid"

const useList = (defaultItemValues = {}, defaultItems = []) => {
  const [items, setItems] = useState(defaultItems)
  const addItem = ( props ) => {
    setItems( prevItems => [...prevItems, 
      {
        id: v4(),
        ...defaultItemValues,
        ...props
      }])
  }
  const removeItem = ( id ) => {
    setItems( prevItems => prevItems.filter(
      item => item.id !== id
    ))
  }
  const changeItem = ( id, prop ) => {
    setItems( prevItems => prevItems.map(
      prevItem => (prevItem.id !== id) ? prevItem : {...prevItem, ...prop}
    ) )
  }

  return [items, addItem, removeItem, changeItem]
}

export default useList