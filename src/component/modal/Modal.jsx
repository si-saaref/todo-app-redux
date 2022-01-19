
export default function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-semi-transparent z-50 flex justify-center items-center">
      <div className="relative bg-white w-10/12 max-w-md h-52 max-h-60 rounded-lg  pt-4">
        {children}
      </div>
    </div>
  );
};
