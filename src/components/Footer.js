import React from "react"
import metadata from "../metadata.json"

let footerStyle = {
  display: "fixed",
  bottom: "5px",
  color: "white",
  zIndex: "10"
}

function Footer() {
  return (
    <div style={footerStyle}>
      <div className="footer-version">{`Version ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag}`}</div>
    </div>
  )
}

export default Footer
