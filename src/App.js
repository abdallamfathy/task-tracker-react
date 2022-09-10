import Header from "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css';
import { useState } from "react";


function App() {
  const [tasks,setTask] = useState([
    {
      id:1,
      title:"Cinema production",
      day: "3/10/2022",
      reminder:true,
    },
    {
      id:2,
      title:"Health and life",
      day:"4/10/2022",
      reminder:true,
    },
    {
      id:3,
      title:"Start a new technology",
      day: "5/3/1999",
      reminder:false,
    }
  ]) 
  
  // Add task
  const onAdd = (task) =>{
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id , ...task};

  }


  // Delete function
  const deleteTask = (id) =>{
    setTask(tasks.filter((task) => 
      task.id !== id
    ))
  }

  // Reminder function
  const toggleReminder = (id) =>{
    setTask(tasks.map((task)=>{
      return task.id === id ? {...task , reminder:!task.reminder} : task;
    }))
  }

  
  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        "there is no tasks"
      )}
      <AddTask onAdd={onAdd}/>
    </div>
  );
}
export default App;
