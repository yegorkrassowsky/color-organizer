import React, {createContext, useEffect, useReducer, useContext, useRef, useCallback} from 'react';
import { combineReducers } from 'redux'
import { colors, sort } from './reducers/colors'
import {toasts as toastsReducer} from './reducers/toasts'
import {addColorAction, rateColorAction, removeColorAction, renameColorAction} from './actions/color'
import {addToastAction, removeToastAction} from './actions/toast'
import {logger} from './logger'

const initialState = localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : {colors: []}
const store = createContext(initialState);

const useStore = () => {
  return useContext(store)
}

const { Provider } = store;

function useReducerWithLogger(reducer, addToast) {
  let prevState = useRef(initialState);
  let prevAction = useRef(null)
  const [state, dispatch] = useReducer(reducer, initialState);

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
        //console.log(prevAction.current)
        //console.log("Prev state: ", prevState.current);
        // console.log("Next state: ", state);
        // console.groupEnd();
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
  const removeColor = (id) => dispatch(removeColorAction(id))
  const rateColor = (id, rating) => dispatch(rateColorAction(id, rating))
  const renameColor = (id, title) => dispatch(renameColorAction(id, title))
  useEffect(() => {
    localStorage['redux-store'] = JSON.stringify(state)
  }, [state])

  return <Provider value={{ state, dispatch, addColor, removeColor, rateColor, renameColor, toasts, removeToast}}>{children}</Provider>
}

export { store, StateProvider, useStore }