import React from 'react'

const tasks = [
    {
        id: 1,
        text: 'Breathing',
        day: 'Everyday, brother',
        reminder: 'true'
    },
    {
        id: 2,
        text: 'Meeting',
        day: 'Feb 9th at 13:00',
        reminder: 'true'
    },
    {
        id: 3,
        text: 'Groceries',
        day: 'Jan 12th at 11:00',
        reminder: 'false'
    }
]

function Tasks() {
  return (
    <div>
        {tasks.map((task) => (<h3 id={task.id}>{task.text}</h3>))}
    </div>
  )
}

export default Tasks
