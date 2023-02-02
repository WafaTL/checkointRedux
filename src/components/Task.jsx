import React from 'react'
import { useDispatch } from 'react-redux'
import { completed, deletetask, setCurrentTask } from '../redux/actions/todoAction'


const Task = ({task}) => {
    const{taskName,id,isDone}=task
    const dispatch=useDispatch()
   const onClick = (e) => {
    console.log('test')

        if (e.target.id === "edit") {
          dispatch(setCurrentTask(task));
        }
        if (e.target.id === "delete") {
          dispatch(deletetask(id));
        }
      }
    
  return (
    <li>
        <span
        className={isDone ? "completed" : ""}
         onClick={()=>dispatch(completed(id))}
        >
          {taskName}
        </span>
        {/* <i className="fa-solid fa-trash-can" onClick={onDeleteClicked}></i> */}
        <div>
        <button id='delete'className='button' onClick={onClick}>delete</button>
        {/* <button  id ='edit'className='button' onClick={onclick}
        data-bs-toggle="modal"
        data-bs-target="#editTask"
        >edit</button> */}
        <button id='edit' type="button" className="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
         onClick={onClick}
        >
        edit
</button>
</div>

      </li>
  )
}

export default Task;
