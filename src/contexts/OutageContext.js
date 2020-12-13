import React, { createContext, useReducer, useEffect } from "react"
import { outageReducer } from "../reducers/OutageReducer"

export const OutageContext = createContext()

const OutageContextProvider = props => {
  const [outages, dispatch] = useReducer(outageReducer, [], () => {
    const localData = localStorage.getItem("outages")
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem("outages", JSON.stringify(outages))
  }, [outages])

  return <OutageContext.Provider value={{ outages, dispatch }}>{props.children}</OutageContext.Provider>
}

export default OutageContextProvider
