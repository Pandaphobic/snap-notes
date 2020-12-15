import React from "react"

const ScheduleItems = ({ scheduleItem }) => {
  // Coaching is often numbered - this removes the number
  // ex. Coaching19:30 AM --> Coaching9:30 AM
  let Coaching = /(Coaching\d)/
  // Check for day of the week and differentiate
  // ****** THIS COULD BE DONE WAY BETTER*******
  let TRItem = "heyguy"
  let daysOfTheWeek = /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday"/

  if (scheduleItem) {
    if (Coaching.test(scheduleItem)) {
      scheduleItem = scheduleItem.replace(Coaching, "Coaching")
    }

    if (daysOfTheWeek.test(scheduleItem)) {
      TRItem = (
        <tr>
          <th className="bg-info" style={{ fontSize: "18px" }}>
            {scheduleItem}
          </th>
        </tr>
      )
      // Case for regular item
      // ***Should considfer color coding these
    } else {
      // Add Space between Activities and Times
      // ex. Phone9:00 AM --> Phone - 9:00 AM
      scheduleItem = scheduleItem.replace(/([a-z])(\d+)/g, "$1 - $2")
      TRItem = (
        <tr>
          <td style={{ fontWeight: "600" }}>{scheduleItem}</td>
        </tr>
      )
    }
  }

  return <>{TRItem}</>
}

export default ScheduleItems
