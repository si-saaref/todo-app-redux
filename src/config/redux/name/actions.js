import * as actionName from "./string";

export const addUser = (name) => {
  return {
    type: actionName.ADD_NAME,
    payload: name
  };
};

export const getUser = () => {
  return {
    type: actionName.GET_NAME
  };
};