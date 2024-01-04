import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Component/Addtodo'
import Todos from './Component/Todos'

function App() {
  
    

  return (
    <>
     <h2>Learn aAbout Redux-Toolkit</h2>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
