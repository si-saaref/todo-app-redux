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
    setIndex(null);
    setTodo("");
  };

  return (
    <>
      <Modal>
        <div className="px-8 pt-4">
          <h2 className="text-lg" >What do you wanna do? </h2>
          <input type="text" name="todo" id="todo" value={value} onChange={handleChange} className="border-2 border-slate-300 rounded-lg w-full my-1.5 px-1.5 py-0.5" />
          <div className="absolute right-5 bottom-5 flex gap-4">
            <button onClick={closeModal} className="rounded-md text-white bg-red-600 px-2 py-0.5">
              Cancel
            </button>
            <button onClick={!isUpdate ? handleAddTodo : handleUpdateTodo} className="rounded-md text-white bg-green-600 px-2 py-0.5">
              {!isUpdate ? 'Add' : 'Update'}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};
