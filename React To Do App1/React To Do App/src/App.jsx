import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import Add from './component/Add'
import Home from './component/Home'

function App() {
  return (
    <div className="App">
      <Header/>
       <Add/>
     <Home/>
    </div>
  )
}
export default App
