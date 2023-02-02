import { ADDTASK, COMPLETED, DELETETASK, EDITTASK, FILTERTASK, SET_CURRENT_TASK } from "./types";

export const addtask = newtask => {
    return {
    payload:newtask,
      type: ADDTASK,
    };
  };
  export const deletetask =(id) => {
    return {
    payload:id,
      type: DELETETASK
    };
  };
  export const completed =(id) => {
    return {
    payload:id,
      type: COMPLETED
    };
  };
  export const filterTask =(payload) => {
    return {
    payload,
      type: FILTERTASK
    };
  };
  export const editTask =(payload) => {
    return {
    payload,
      type: EDITTASK
    };
  };
  export const setCurrentTask =(payload) => {
    return {
    payload,
      type: SET_CURRENT_TASK
    };
  };