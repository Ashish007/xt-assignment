import React from 'react'
import ReactDOM from 'react-dom'

const Index = () =>{
    return <div id="root">Hello World!</div>
}
export default function App(){
    return ReactDOM.render(<Index />, document.getElementById("root"))
}