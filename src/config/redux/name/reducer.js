import * as actionName from "./string";

const userNameInitialState = {
  userName: ""
};

const initialState = {
  ...userNameInitialState,
  action: ""
};

const userNameReducer = (state = initialState, action) => {
  const _actions = {
    [actionName.ADD_NAME]: () => {
      console.log("Cek data : ", action);
      return {
        ...state,
        action: action.type,
        userName: action.payload
      };
    },
    [actionName.GET_NAME]: () => {
      return {
        ...state,
        action: action.type
      };
    },
    DEFAULT: () => state
  };
  return (_actions[action.type] || _actions.DEFAULT)();
};

export default userNameReducer;