import React, { createContext, useState } from "react"
import { v4 as uuid } from "uuid"

export const OutageContext = createContext()

const OutageContextProvider = props => {
  const [outages, setOutages] = useState([
    //from outagetracker.js line 101
    {
      scope: "P1",
      title: "Problems #1",
      instruction: "Relate",
      masterTicket: "PRB000111",
      id: 1
    },
    {
      scope: "P2",
      title: "Problems #2 - Electric Boogaloo",
      instruction: "Duplicate",
      masterTicket: "PRB000666",
      id: 2
    },
    {
      scope: "P3",
      title: "Problems #3 - And the prisoner of Azkaban",
      instruction: "Email Info",
      masterTicket: "PRB001975",
      id: 3
    }
  ])

  const addOutage = (scope, title, instruction, masterTicket) => {
    setOutages([...outages, { scope, title, instruction, masterTicket, id: uuid() }])
  }

  const removeOutage = id => {
    setOutages(outages.filter(outage => outage.id !== id))
  }
  return <OutageContext.Provider value={{ outages, addOutage, removeOutage }}>{props.children}</OutageContext.Provider>
}

export default OutageContextProvider
