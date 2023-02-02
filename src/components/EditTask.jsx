import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { editTask } from '../redux/actions/todoAction';


const EditTask = () => {
    const[text,setText]=useState('');
    const current=useSelector((state)=>state.todoReducer.current);
    const dispatch=useDispatch()

    const onClicked=()=>{
        const updTask={
            id:current.id,
            taskName:text,
        };
        dispatch(editTask(updTask))
        }
    
    useEffect(() => {
        console.log("run useEffect");
        if (current !== null) {
          setText(current.taskName);
        }
      }, [current]);
    
        
  return (
  
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Task Name</label>
      <input  className="form-control" id="exampleFormControlInput1" placeholder="task..."
     type="text"
     value={text}
     onChange={e=>setText(e.target.value)}

      />
    </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={onClicked} className="btn btn-primary"  data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
 
  )
}


export default EditTask
