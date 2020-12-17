import React, { createContext, useState, useEffect } from "react"

export const CallerNotesContext = createContext()

const NotesContextProvider = props => {
  const [notes, setCallerNotes] = useState(() => {
    const localData = localStorage.getItem("notes")
    return localData ? JSON.parse(localData) : []
  })

  const updateSchedule = notes => {
    setCallerNotes(notes)
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
    return () => {
      return <CallerNotesContext.Provider value={{ notes }}>{props.children}</CallerNotesContext.Provider>
    }
  }, [notes])
}
export default NotesContextProvider
