import React,{useEffect,useState} from 'react'
import TaskCard from "./TaskCard"

const TasksList = () => {

    const [tasks, setTasks] = useState([])
    const [loading, setloading] = useState(true)

    const fetchTasks = async (url) => {
        let response = await fetch(url);
        let data = await response.json();
        setTasks(data);    
        setloading(false)
        
       
      };
    
   
useEffect(() => {
   fetchTasks("https://localhost:44330/api/tasks")   
   
}, [])

if(loading){
    return <h1>Loading</h1>
    }
return (
        <div>         
            {console.log(tasks)}
           {tasks.map(task=>
            <TaskCard key={task.id} name={task.name} progress={task.progress} dueDate={task.dueDate}/>            
            )}
        </div>
    )
    
}


export default TasksList
