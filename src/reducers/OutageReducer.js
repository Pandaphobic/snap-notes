import { v4 as uuid } from "uuid"

export const outageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_OUTAGE":
      return [
        ...state,
        {
          scope: action.outage.scope,
          title: action.outage.title,
          instruction: action.outage.instruction,
          masterTicket: action.outage.masterTicket,
          id: uuid()
        }
      ]
    case "REMOVE_OUTAGE":
      return state.filter(outage => outage.id !== action.id)
    default:
      return state
  }
}
