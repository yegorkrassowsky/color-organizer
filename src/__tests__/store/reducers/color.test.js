import C from "../../../constants"
import {color} from "../../../reducers/colors"
import deepFreeze from 'deep-freeze'

describe("color Reducer", () => {
  it("ADD_COLOR success", () => {
    const state = {}
    const action = {
      type: C.ADD_COLOR,
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: new Date().toString()
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(color(state, action)).toEqual({
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      timestamp: action.timestamp,
      rating: 0
    })
  })
  it("RATE_COLOR success", () => {
    const timestamp = new Date().toString()
    const state = {
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      rating: 0,
      timestamp,
    }
    const action = {
      type: C.RATE_COLOR,
      id: 0,
      rating: 5
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(color(state, action)).toEqual({
      id: 0,
      title: 'Test Teal',
      color: '#90C3D4',
      rating: 5,
      timestamp,
    })
  })
})