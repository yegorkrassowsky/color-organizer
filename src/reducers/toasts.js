import C from "../constants"

export const toasts = (state = [], action) => {
  switch(action.type) {
    case C.ADD_TOAST:
      return [toast({}, action), ...state]
    case C.REMOVE_TOAST:
      return state.filter(c => c.id !== action.id)
    default:
      return state
  }
}

export const toast = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_TOAST:
      return {
        id: action.id,
        message: action.message,
        color: action.color,
      }
    default:
      return state
  }
}
