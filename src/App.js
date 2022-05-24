// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TasksStateful from './components/TasksStateful'
import { useState } from 'react';

function App() {
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

  return (
    <div className="container">
      <Header />
      <TasksStateful tasks={tasks}/>
    </div>
  );
}

export default App;
