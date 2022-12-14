import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task , onDelete , onToggle}) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={()=>onToggle(task.id)}>
        {task.text}{" "}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id) }/>
        <p>{task.day}</p>
        </div>
  )
}

export default Task