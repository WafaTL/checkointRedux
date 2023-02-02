import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
const ListTask = () => {
const { tasks, filter }=useSelector((state)=>state.todoReducer)
if (filter.length > 0) {
  return (
    <ul className="list-group mt-3">
      {filter.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
  return (
    
      <ul className="todo-list container" >
         {tasks.map(task => (
          <Task task={task} key={task.id}  />
        ))} 
     </ul>
    
  )
}

export default ListTask
