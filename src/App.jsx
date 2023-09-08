import React from 'react'
import Button from './components/Button';
import Tooltip from './components/Tooltip';
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <div style={{padding: '50px '}}>
        <Tooltip position= 'top' text = "this is a tooltip">
          <Button text = "Hover Me"/>
        </Tooltip>
        <br/> <br/> <br/>

        <Tooltip position="bottom" text = "This is a another tooltip">
          <Button text= "hover me too"/>
          </Tooltip>
      </div>
    </div>
  )
}

export default App
