import * as actionName from "./string";

const todoInitialState = {
  todos: ['Makan', 'Ayam']
};

const initialState = {
  ...todoInitialState,
  action: ""
};

const todoReducer = (state = initialState, action) => {
  const _actions = {
    [actionName.ADD_TODO]: () => {
      console.log('Cek data', action);
      return {
        ...state,
        action: action.type,
        todos: [...state.todos, action.payload]
      };
    },
    [actionName.DELETE_TODO]: () => {
      console.log('Cek data', action);
      return {
        ...state,
        action: action.type,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };
    },
    [actionName.UPDATE_TODO]: () => {
      state.todos.splice(action.payload.index, 1, action.payload.value);
      console.log('Cek data', action);
      return {
        ...state,
        action: action.type
      };
    },
    [actionName.RESET_TODO]: () => {
      console.log('Cek data', action);
      return {
        ...state,
        action: action.type,
        todos: action.payload
      };
    },
    DEFAULT: () => state
  };

  return (_actions[action.type] || _actions.DEFAULT)();
};

export default todoReducer;