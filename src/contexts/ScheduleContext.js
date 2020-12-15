import React, { createContext, useState, useEffect } from "react"

export const ScheduleContext = createContext()

const ScheduleContextProvider = props => {
  const [scheduleItems, setScheduleItems] = useState(() => {
    const localData = localStorage.getItem("schedule-items")
    return localData ? JSON.parse(localData) : []
  })

  const updateSchedule = parsedScheduleItems => {
    setScheduleItems(parsedScheduleItems)
  }
  useEffect(() => {
    localStorage.setItem("schedule-items", JSON.stringify(scheduleItems))
  }, [scheduleItems])

  return <ScheduleContext.Provider value={{ scheduleItems, updateSchedule }}>{props.children}</ScheduleContext.Provider>
}

export default ScheduleContextProvider
