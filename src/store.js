import React, {createContext, useEffect, useReducer, useContext, useRef, useCallback} from 'react';
import { combineReducers } from 'redux'
import { colors, sort } from './reducers/colors'
import {toasts as toastsReducer} from './reducers/toasts'
import {addColorAction, rateColorAction, removeColorAction, renameColorAction} from './actions/color'
import {addToastAction, removeToastAction} from './actions/toast'
import {logger} from './logger'
import PropTypes from 'prop-types'
import defaultColors from './data/defaultColors'

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : defaultColors
const store = createContext(initialState);

const useStore = () => {
  return useContext(store)
}

const { Provider } = store;

function useReducerWithLogger(reducer, addToast) {
  let prevState = useRef(initialState);
  let prevAction = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchWithLogger = useCallback(
    (reducerAction) => {
      prevAction.current = reducerAction
      return dispatch(reducerAction)
    },
    [dispatch]
  )

  useEffect(
    () => {
      if (state !== initialState) {
        logger(prevAction.current, state, prevState.current, addToast)
      }
      prevState.current = state;
    },
    [state, addToast]
  )

  return [state, dispatchWithLogger]
}

const StateProvider = ( { children } ) => {
  const [toasts, dispatchToast] = useReducer(toastsReducer, [])
  const addToast = useCallback((message, color) => dispatchToast(addToastAction(message, color)), [dispatchToast])
  const removeToast = (id) => dispatchToast(removeToastAction(id))

  const [state, dispatch] = useReducerWithLogger(combineReducers({colors, sort}), addToast)
  const addColor = (title, color) => dispatch(addColorAction(title, color))
  const removeColor = (id) => {
    const {title} = state.colors.find(color => color.id === id )
    if(window.confirm(`Are you sure to delete color "${title}"?`)) {
      dispatch(removeColorAction(id))
    }
  }
  const rateColor = (id, rating) => dispatch(rateColorAction(id, rating))
  const renameColor = (id, title) => dispatch(renameColorAction(id, title))
  useEffect(() => {
    localStorage['redux-store'] = JSON.stringify(state)
  }, [state])

  return <Provider value={{ state, dispatch, addColor, removeColor, rateColor, renameColor, toasts, removeToast}}>{children}</Provider>
}

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { store, StateProvider, useStore }