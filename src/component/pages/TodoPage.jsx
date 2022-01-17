import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { nameRootSelector } from "../../config/redux/name/selector";
import * as action from "../../config/redux/name/actions";
import TodoItem from "../TodoItems/TodoItem";
import { AiOutlinePlus } from "react-icons/ai";
import TodoModal from "../modal/TodoModal";

export default function TodoPage() {
  const nameState = useSelector(nameRootSelector, shallowEqual);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(null)
  const userName = nameState.userName;

  const handleModal = () => {
    if (openModal) {
      console.log('Modal');
      return (
        <TodoModal setOpenModal={setOpenModal} />
      );
    }
  };

  useEffect(() => {
    dispatch(action.getUser());
    console.log(nameState);
  });

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="relative flex flex-col items-center w-full sm:3/5 md:w-2/5 shadow-2xl p-4 md:p-8 mx-1.5">
          <h1 className="self-start bg-orange-700 text-xl md:text-2xl mt-2 mb-7">
            {`Selamat Datang ${userName}`}
          </h1>
          <TodoItem />
          <TodoItem />
          <button className="absolute bottom-10 right-10 flex justify-center items-center w-16 h-16 bg-red-700 rounded-full" onClick={() => setOpenModal(true)}>
            <AiOutlinePlus size="3em" className="hover:rotate-90 duration-200" />
          </button>
        </div>
      </div>
      {handleModal()}
    </>
  );
};
