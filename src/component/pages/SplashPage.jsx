import { useNavigate } from "react-router";
import useForm from "../useForm";

export default function SplashPage() {
  const navigate = useNavigate();
  const { value, handleChange } = useForm();

  const handleSubmit = () => {
    // alert(value);
    // navigate("/todo");
  }

  return (
    <div className="flex bg-Coffe-bg bg-cover h-screen justify-center items-center">
      <div className="flex flex-col gap-7 w-72 h-52 bg-slate-400 rounded-2xl p-5">
        <h1>Insert Your Name</h1>
        <div className="flex flex-col gap-5">
          <input type="text" name="name" id="name" required value={value} onChange={handleChange} className="rounded-3xl px-3 py-1" />
          <button className="border bg-slate-700 text-white rounded-xl p-1" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};
