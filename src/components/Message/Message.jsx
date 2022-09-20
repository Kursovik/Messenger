import React from "react"
import "./style.scss"
export default (props) => {
  const { name, text } = props
  const resultName = name[0].toUpperCase() + name.substr(1) + " :"
  return (
    <div className="message">
      <p className="message__text">
        <b>{resultName}</b>
      </p>
      <p>{text}</p>
    </div>
  )
}
