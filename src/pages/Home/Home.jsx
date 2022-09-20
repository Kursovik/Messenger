import React from "react"
import "./style.scss"
import MessageList from "../../components/containers/MessageList"
import MsgInput from "../../components/MsgInput"

export default () => {
  return (
    <div className="messenger__container">
      <MsgInput />
      <MessageList />
    </div>
  )
}
