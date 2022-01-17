import { useDispatch } from "react-redux";
import useForm from "../useForm";
import Modal from "./Modal";
import * as action from "../../config/redux/todo/actions";
import { useEffect, useState } from "react";

export default function TodoModal({
  setOpenModal,
  todo,
  index,
  setIndex,
  setTodo
}) {
  const { value, setValue, handleChange } = useForm();
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();

  const setUpdate = () => {
    if (index !== null) {
      setIsUpdate(true);
      setValue(todo);
    }
  };

  useEffect(() => {
    console.log(value);
    setUpdate();
  }, [todo])

  const closeModal = () => {
    setOpenModal(false);
    setIndex(null);
    setTodo("");
  };

  const handleAddTodo = () => {
    setOpenModal(null);
    dispatch(action.addTodo(value));
  };

  const handleUpdateTodo = () => {
    // console.log(value);
    dispatch(action.updateTodo({ index, value }));
    setOpenModal(false)
  };

  return (
    <>
      <Modal>
        <div className="">
          <h2>What do you wanna do? </h2>
          <input type="text" name="todo" id="todo" value={value} onChange={handleChange} className="border-2 rounded-lg  min-w-fit" />
          <div className="absolute right-5 bottom-5 flex gap-4">
            <button onClick={closeModal} className="rounded-md text-white bg-red-600 px-2">
              Cancel
            </button>
            <button onClick={!isUpdate ? handleAddTodo : handleUpdateTodo} className="rounded-md text-white bg-red-600 px-2">
              {!isUpdate ? 'Add' : 'Update'}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
