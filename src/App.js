import Header from "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css';
import { useState , useEffect } from "react";


function App() {
  const [tasks,setTask] = useState([]) 
  
  /**
   * @param  {Use state to show the added task} false
   */
  const [ShowAddTask, setShowAddTask] = useState(false);
  
  /**
   * @param  {fetching data from server} (
   */
  useEffect(() => {
    const getTasks = async () =>{
      const serverTasks = await fetchTasks();
      setTask(serverTasks)
      
    }
    getTasks();
  }, [])
  
  // Fetch tasks
  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  // Fetch tasks for remider
  const fetchTask = async(id) =>{

    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // Add task
  const onAdd = async(task) =>{
  const res = await fetch('http://localhost:5000/tasks' , {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    setTask([...tasks,data])

    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = {id , ...task};
    // setTask([...tasks,newTask]);

  }


  // Delete function
  const deleteTask = async(id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'DELETE',
    })
    setTask(tasks.filter((task) => 
      task.id !== id
    ))
  }

  // Reminder function
  const toggleReminder = async (id) =>{
    
    const taskToToggle = await fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updTask)
    });

    const data = res.json();
    setTask(tasks.map((task)=>{
      return task.id === id ? {...task , reminder:!data.reminder} : task;
    }))
  }

  
  return (
    <div className="App">
      <Header onAdd={()=> setShowAddTask(!ShowAddTask)} showAdd={ShowAddTask} />
      {ShowAddTask && <AddTask onAdd={onAdd}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        "there is no tasks"
      )}
    </div>
  );
}
export default App;
