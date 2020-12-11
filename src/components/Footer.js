import React from "react"
import metadata from "../metadata.json"

function Footer() {
  return (
    <div className="m-auto">
      <p>{`Version ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag}`}</p>
    </div>
  )
}

export default Footer
