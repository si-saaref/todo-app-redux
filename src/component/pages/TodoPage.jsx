import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { nameRootSelector } from "../../config/redux/name/selector";
import * as action from "../../config/redux/todo/actions";
import TodoItem from "../TodoItems/TodoItem";
import { AiOutlinePlus } from "react-icons/ai";
import TodoModal from "../modal/TodoModal";
import { todosRootSelector } from "../../config/redux/todo/selector";

export default function TodoPage() {
  const nameState = useSelector(nameRootSelector, shallowEqual);
  const userName = nameState.userName;
  const todoState = useSelector(todosRootSelector, shallowEqual);
  const todos = todoState.todos;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [idx, setIdx] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    if (openModal) {
      return (
        <TodoModal setOpenModal={setOpenModal} todo={todo} setTodo={setTodo} index={idx} setIndex={setIdx} />
      );
    }
  };

  useEffect(() => {
    // dispatch(action.getUser());
    console.log(todoState);
  });

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="relative flex flex-col items-center w-full sm:3/5 md:w-2/5 shadow-2xl p-4 md:p-8 mx-1.5">
          <h1 className="self-start bg-orange-700 text-xl md:text-2xl mt-2 mb-7">
            {`Selamat Datang ${userName}`}
          </h1>
          {todos.map((todo, index) => {
            return (
              <div className="flex items-center bg-slate-200 w-full h-10 p-3 my-2 rounded-xl" key={index.toString()}>
                <h1 className="grow">{todo}</h1>
                <div className="flex gap-2">
                  <button className="rounded-md px-1.5 bg-red-500" onClick={() => dispatch(action.deleteTodo(index))}>X</button>
                  <button className="rounded-md px-1.5 bg-green-500" onClick={() => {
                    setTodo(todo);
                    setIdx(index);
                    setOpenModal(true);
                  }} >Update</button>
                </div>
              </div>
            );
          })}
          <button className="absolute bottom-10 right-10 flex justify-center items-center w-16 h-16 bg-red-700 rounded-full" onClick={() => setOpenModal(true)}>
            <AiOutlinePlus size="3em" className="hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
      {handleModal()}
    </>
  );
};
