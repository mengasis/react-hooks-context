import { createContext, useContext, useState, useMemo } from 'react'

const initialState = {
  count: 0
}

const CountContext = createContext(initialState)

function useCount() {
  const context = useContext(CountContext)
}
