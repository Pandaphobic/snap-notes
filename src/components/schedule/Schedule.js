import React, { useContext } from "react"
import { ScheduleContext } from "../../contexts/ScheduleContext"
import { Table } from "react-bootstrap"
import ScheduleItems from "./ScheduleItems"
import { v4 as uuid } from "uuid"

const Schedule = () => {
  const { scheduleItems } = useContext(ScheduleContext)
  return (
    <div className="w-75 m-auto">
      <h4 className="pt-2">{`THIS WEEK`}</h4>
      <Table striped bordered hover variant="dark" className="m-auto">
        <tbody>
          {scheduleItems.map(scheduleItem => (
            <ScheduleItems key={uuid()} scheduleItem={scheduleItem} />
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Schedule
