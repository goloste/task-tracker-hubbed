import React from 'react'
import Button from './Button'

const onClick = () => {
  console.log('Click')
} 

function Header() {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button text='Green' color='green' onClick={onClick} />
      <Button text='yellow' color='yellow' textColor='black'/>
    </header>
  )
}

export default Header
