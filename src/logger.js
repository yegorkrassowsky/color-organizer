import C from "./constants"

export const logger = (action, state, prevState, callback) => {
  const data = loggerData(action, state, prevState)
  const color = data.color ? data.color : false
  if ( data.message ) callback(data.message, color)
}

const loggerData = (action, state, prevState) => {
  let color, oldColor
  switch(action.type) {
    case(C.ADD_COLOR):
      color = getColor(action.id, state)
      return {message: addColorMessage(color.title), color: color.color}
    case(C.REMOVE_COLOR):
      color = getColor(action.id, prevState)
      return {message: removeColorMessage(color.title), color: color.color}
    case(C.RATE_COLOR):
      color = getColor(action.id, state)
      oldColor = getColor(action.id, prevState)
      return {message: rateColorMessage(color.title, oldColor.rating, color.rating), color: color.color}
    case(C.RENAME_COLOR):
    color = getColor(action.id, state)
    oldColor = getColor(action.id, prevState)
    return {message: renameColorMessage(color.title, oldColor.title), color: color.color}
    default:
      return false
  }
}

const getColor = (id, {colors}) => colors.find(color => color.id === id )

const addColorMessage = (title) => {
  return `New color added: ${title}`
}

const removeColorMessage = (title) => {
  return `Color removed: ${title}`
}

const rateColorMessage = (title, oldRating, newRating) => {
  return `Color ${title} rating changed: ${oldRating} -> ${newRating}`
}

const renameColorMessage = (title, oldTitle) => {
  return `Color title changed: ${oldTitle} -> ${title}`
}
