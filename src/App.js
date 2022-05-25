// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TasksStateful from './components/TasksStateful'
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  // Manages action at opening of webpage
  useEffect(() => {
    // Definizione di getTasks
    const getTasks = async () => {
      // Call di fetch tasks
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    // Call di getTasks
    getTasks()
  }, []) // The empty array '[]' is a dependency array, to pass value inside useEffect
  
  // Definizione di 'fetchTasks'
  // Vogliamo utilizzare una fetch con una 'async await'
  const fetchTasks = async () => {
    // 'fetch' restituisce una premise che vogliamo attendere, quindi uso 'await'
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    // 'fetch' restituisce una premise che vogliamo attendere, quindi uso 'await'
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


  // Add Task
  // const addTask = (task) => {
  //   const id = Math.floor(Math.random() * 1000 + 1)
  //   const newTask = {id, ...task}
  //   setTasks([...tasks, newTask])
  // }
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000 + 1) // Create a new task id
    // const newTask = {id, ...task}                   // Create a new task
    // setTasks([...tasks, newTask])                   // Add task
    
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
  } 

  // Delete Task
  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // const onDelete = async (id) => {
  //   await fetch(`http://localhost/5000/tasks/${id}`, {
  //     method: 'DELETE'
  //   })
  //   setTasks(tasks.filter((task) => task.id !== id))
  // }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // console.log(id)
    // setTasks(tasks.map((task) => task.id === id 
    // ? {...task, reminder: !task.reminder } : task))
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, reminder: !data.reminder } : task))

  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <TasksStateful tasks={tasks} 
      onDelete={onDelete} 
      onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
