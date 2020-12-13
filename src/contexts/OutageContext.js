import React, { createContext, useReducer } from "react"
import { outageReducer } from "../reducers/OutageReducer"

export const OutageContext = createContext()

const OutageContextProvider = props => {
  const [outages, dispatch] = useReducer(outageReducer, [])

  return <OutageContext.Provider value={{ outages, dispatch }}>{props.children}</OutageContext.Provider>
}

export default OutageContextProvider
