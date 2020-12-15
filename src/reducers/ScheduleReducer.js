export const scheduleReducer = (state, action) => {
  console.log(action.text)
  switch (action.type) {
    case "NEW_SCHEDULE":
      return [
        {
          text: action.text
        }
      ]
  }
}
