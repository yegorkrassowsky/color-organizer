import {v4} from "uuid"
import C from "../constants"

export const addColorAction = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
})

export const removeColorAction = (id) => ({
  type: C.REMOVE_COLOR,
  id
})

export const changeColorAction = (id, prop) => ({
  type: C.CHANGE_COLOR,
  id,
  prop
})

export const rateColorAction = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating
})

export const renameColorAction = (id, title) => ({
  type: C.RENAME_COLOR,
  id,
  title
})

export const sortColorsAction = (sortBy) => ({
  type: C.SORT_COLORS,
  sortBy
})