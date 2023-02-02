import { ADDTASK, COMPLETED, DELETETASK, EDITTASK, FILTERTASK, SET_CURRENT_TASK } from "../actions/types";

const initialState = {
    tasks:[{
        id:1,
        taskName:'task1',
        isDone:false,},
        {id:2,
        taskName:'task2',
        isDone:false,}],
        filter:[],
        current:null,
}

    const todoReducer = (state = initialState,{type,payload}) => {
        switch (type) {
            case ADDTASK:
                return {
                    ...state,
                    tasks: [...state.tasks,payload],
                };
                
                case DELETETASK:
                    return {
                        ...state,
                        tasks: state.tasks.filter(task=>task.id !==payload)
                    };
                    case COMPLETED:
                    return {
                        ...state,
                        tasks: state.tasks.map(elem=>elem.id===payload? {...elem,isDone:!elem.isDone}:elem)
                    };
                case EDITTASK:
                    return {
                        ...state,
                        tasks: state.tasks.map(task=>task.id ===payload.id?{...task,taskName:payload.taskName}:task)
                    };
                    case SET_CURRENT_TASK:
                     return {
                    ...state,
                    current: payload
                     };
                    case FILTERTASK:
                    return {
                        ...state,
                        filter:payload === "completed"? 
                        state.tasks.filter((task) => task.isDone): payload === "uncompleted"? 
                        state.tasks.filter((task) => !task.isDone): []
                    };
                    default:return state; 
        };
    }
        export default todoReducer
