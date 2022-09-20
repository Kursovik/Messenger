import React from "react"
import "./style.scss"
import MessageList from "../containers/MessageList"
export default () => {
  return (
    <div>
      <input
        type="text"
        id="message__input"
        onKeyDown={() => console.log(111)}
      ></input>
    </div>
  )
}
