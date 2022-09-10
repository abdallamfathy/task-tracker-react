import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task , onDelete , onToggle}) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={()=>onToggle(task.id)}>
        {task.title}
        <FaTimes onClick={() => onDelete(task.id) }/>
        </div>
  )
}

export default Task