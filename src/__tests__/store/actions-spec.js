import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import C from '../../constants'
import { useStore, StateProvider } from '../../store'

test('should add color', () => {
  const wrapper = ({ children }) => (
    <StateProvider>{children}</StateProvider>
  )
  const { result } = renderHook(() => useStore(), { wrapper })
  act(() => {
    result.current.addColor('blue', '#0432ff')
  })

  expect(result.current.state.colors).toHaveLength(4)
  expect(result.current.state.colors[3].id).toHaveLength(36)
  expect(result.current.state.colors[3].rating).toBe(0)
  expect(result.current.state.colors[3].timestamp).toBeDefined()
})

test('should remove color', () => {
  const wrapper = ({ children }) => (
    <StateProvider>{children}</StateProvider>
  )
  const { result } = renderHook(() => useStore(), { wrapper })
  act(() => {
    const id = result.current.state.colors[0].id
    result.current.removeColor(id)
  })
  expect(result.current.state.colors).toHaveLength(2)
})
