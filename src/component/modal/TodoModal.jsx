import Modal from "./Modal";

export default function TodoModal({ setOpenModal }) {
  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <Modal>
      <button onClick={closeModal}>X</button>
    </Modal>
  );
};
