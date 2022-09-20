import React, { Component } from "react"

import "./style.scss"
import Message from "../../Message"

export default class MessageList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [
        { name: "bot", text: "Hey!" },
        { name: "bot", text: "How are you?" },
      ],
    }
  }
  componentDidMount() {
    this.sendMessageEnter()
  }
  componentDidUpdate() {
    if (this.state.messages.length % 2 == 1) {
      setTimeout(() => {
        this.setState({
          messages: [
            ...this.state.messages,
            {
              name: "bot",
              text: "Я бот ,отстань от меня",
            },
          ],
        })
      }, 1000)
    }
  }
  sendMessageEnter = () => {
    const input = document.getElementById("message__input")
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.sendMessage()
      }
    })
  }
  sendMessage = () => {
    let inputValue = document.getElementById("message__input").value

    if (inputValue) {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            name: "Aleks",
            text: inputValue,
          },
        ],
      })
      document.getElementById("message__input").value = ""
    }
  }

  render() {
    const { messages } = this.state
    const Messages = messages.map((el, i) => (
      <Message key={"msg_" + i} name={el.name} text={el.text} />
    ))

    return (
      <div className="messanger__list">
        <button className="message__btn" onClick={this.sendMessage}>
          add
        </button>
        {Messages}
      </div>
    )
  }
}
