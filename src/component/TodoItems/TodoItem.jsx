export default function TodoItem() {
  return (
    <>
      <div className="flex items-center bg-slate-200 w-full h-10 p-3 my-2 rounded-xl">
        <h1 className="grow">Name</h1>
        <div className="flex gap-2">
          <button className="rounded-md px-1.5 bg-red-500">X</button>
          <button className="rounded-md px-1.5 bg-green-500">Update</button>
        </div>
      </div>
    </>
  );
};
