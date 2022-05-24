import React from 'react'
import Task from './Task'

const TasksStateful = ({tasks}) => {
  return (
    <>
        {tasks.map((task) => 
        (<Task key={task.id} task={task}/>))}
    </>
  )
}

export default TasksStateful
