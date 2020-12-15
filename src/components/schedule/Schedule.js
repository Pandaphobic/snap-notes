import React, { useContext } from "react"
import { ScheduleContext } from "../../contexts/ScheduleContext"
import { Table } from "react-bootstrap"
import ScheduleItems from "./ScheduleItems"

const Schedule = () => {
  const { scheduleItems } = useContext(ScheduleContext)
  return (
    <div className="w-75 m-auto">
      <h4 className="pt-2">{`THIS WEEK`}</h4>
      <Table striped bordered hover variant="dark" className="m-auto">
        {scheduleItems.map(scheduleItem => (
          <ScheduleItems key={"schedule"} scheduleItem={scheduleItem} />
        ))}
      </Table>
    </div>
  )
}

export default Schedule
