import React from 'react'
import Button from './Button'

function Header({onAdd}) {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      {/* <Button text='Green' color='green' onClick={onClick} /> */}
      <Button text='Add Task' color='yellow' textColor='black' onClick={onAdd}/>
    </header>
  )
}

export default Header
