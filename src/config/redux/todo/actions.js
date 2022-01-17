import * as actionName from "./string";

export const addTodo = (todo) => {
  return {
    type: actionName.ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionName.DELETE_TODO,
    payload: id
  };
};

export const updateTodo = (todo) => {
  return {
    type: actionName.UPDATE_TODO,
    payload: todo
  };
};