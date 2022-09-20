import React from "react"
import ReactDOM from "react-dom/client"
import "../src/styles/main.scss"
import App from "../src/pages/Home"

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(
  <div className="messenger">
    <App />
  </div>
)
// check_commit 
