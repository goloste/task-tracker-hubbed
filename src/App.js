// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TasksStateful from './components/TasksStateful'
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
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
        text: 'Groceries Shopping',
        day: 'Jan 12th at 11:00',
        reminder: 'false'
    }
  ])
  
  // Delete Task
  const onDelete = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id 
    ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      <TasksStateful tasks={tasks} 
      onDelete={onDelete} 
      onToggle={toggleReminder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
