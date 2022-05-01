import React from "react"
import ReactDOM from "react-dom"
import Button from './Button.jsx'
import "./styles.css"

function soma() {

}

function App() {

    return (
        <div classname="App">
        Hello World
    </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)