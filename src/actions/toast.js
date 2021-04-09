import {v4} from "uuid"
import C from "../constants"

export const addToastAction = (message, color) => ({
  type: C.ADD_TOAST,
  id: v4(),
  message,
  color,
})

export const removeToastAction = (id) => ({
  type: C.REMOVE_TOAST,
  id
})
