 import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask, filterTask } from '../redux/actions/todoAction'
 
 const AddTask = () => {
const[task,setTask]=useState('')
const dispatch = useDispatch()
const onTaskChanged=(event)=> setTask(event.target.value)
const onClicked = ()=>{
    if (task==='') {
        alert('Please enter a task name')
        
      } else {
        const newTask={ 
          id:Math.floor(Math.random() * 1000),
          taskName:task
        };
    dispatch(addtask(newTask))
    setTask('')
}
}
const onFilter = (e) => {
  dispatch(filterTask(e.target.id));
};

   return (
     <div className='container'>
        <div className="my-todos">
        <h1 className="title">todos</h1>
        <div className="input-group">
          <input
            className='input-text'
            type="text"
             value={task}
            
             onChange={onTaskChanged}
    
            placeholder="Add Task..."
          />
          {/* <button className="addBtn" onClick={onAddClicked}> */}
          <button className="addBtn" onClick={onClicked}>
          

            Add
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <input
            type="radio"
            name="task"
            value="all"
            id="all"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="completed"
            id="completed"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="uncompleted">
            Uncompleted
          </label>
        </div>
      </div>

     </div>
   )
 }
 
 export default AddTask
 
