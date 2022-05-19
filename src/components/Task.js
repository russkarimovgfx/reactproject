import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
 return (
  <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
   <div className="flex-item">
    <h3>{task.text} </h3>
    <p>{task.day}</p>
   </div>
   <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
  </div>
 )
}

export default Task