import React from 'react'
import Button from './Button'

function Header({onAdd, showAdd}) {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button text={showAdd ? 'Close' : 'Add Task'}
       color={showAdd ? 'red' : 'green'} 
       textColor='white' 
       onClick={onAdd}/>
    </header>
  )
}

export default Header
