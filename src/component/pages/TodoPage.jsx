import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { nameRootSelector } from "../../config/redux/name/selector";
import * as action from "../../config/redux/todo/actions";
import { AiOutlinePlus } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { BsTrash } from "react-icons/bs"
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
      <div className="flex justify-center min-h-screen">
        <div className="relative flex flex-col items-center w-full sm:3/5 md:w-3/5 lg:w-2/5 shadow-2xl px-4 pt-4 pb-24 md:p-8 md:pb-24 mx-1.5">
          <h1 className="self-start text-xl md:text-2xl mt-2 mb-7 font-raleway border-b pb-4">
            {`Selamat Datang ${userName}`}
          </h1>
          {todos.map((todo, index) => {
            return (
              <div className="flex items-center bg-slate-200 w-full h-12 px-3 my-2 rounded-xl" key={index.toString()}>
                <h1 className="grow">{todo}</h1>
                <div className="flex gap-2">
                  <button className="rounded-md p-2 bg-red-600" onClick={() => dispatch(action.deleteTodo(index))}>
                    <BsTrash />
                  </button>
                  <button className="rounded-md p-2 bg-green-500" onClick={() => {
                    setTodo(todo);
                    setIdx(index);
                    setOpenModal(true);
                  }} >
                    <GrUpdate />
                  </button>
                </div>
              </div>
            );
          })}
          <button className="fixed bottom-10 right-10 md:right-1/3 flex justify-center items-center w-16 h-16 bg-semi-gray rounded-full" onClick={() => setOpenModal(true)}>
            <AiOutlinePlus size="3em" className="hover:rotate-90 duration-300" style={{ fill: "wheat" }} />
          </button>
        </div>
      </div>
      {handleModal()}
    </>
  );
};
