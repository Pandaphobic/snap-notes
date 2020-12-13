import React from "react"

function ScheduleItems(props) {
  let scheduleItems = props.items
  // Coaching is often numbered - this removes the number
  // ex. Coaching19:30 AM --> Coaching9:30 AM
  let Coaching = /(Coaching\d)/
  // Check for day of the week and differentiate
  // ****** THIS COULD BE DONE WAY BETTER*******
  let HTMLItems = []
  if (scheduleItems) {
    console.log(scheduleItems)

    let daysOfTheWeek = /Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday"/

    scheduleItems.forEach((item, index) => {
      if (Coaching.test(item)) {
        item = item.replace(Coaching, "Coaching")
      }
      if (daysOfTheWeek.test(item)) {
        HTMLItems.push(
          <tr key={index}>
            <th className="bg-info" style={{ fontSize: "18px" }}>
              {item}
            </th>
          </tr>
        )
        // Case for regular item
        // ***Should considfer color coding these
      } else {
        // Add Space between Activities and Times
        // ex. Phone9:00 AM --> Phone - 9:00 AM
        item = item.replace(/([a-z])(\d+)/g, "$1 - $2")
        HTMLItems.push(
          <tr key={index}>
            <td style={{ fontWeight: "600" }}>{item}</td>
          </tr>
        )
      }
    })
  }
  console.log(HTMLItems)

  return <tbody>{HTMLItems}</tbody>
}
export default ScheduleItems
