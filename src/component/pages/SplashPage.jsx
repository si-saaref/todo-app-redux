import { useNavigate } from "react-router";
import useForm from "../useForm";
import * as action from "../../config/redux/name/actions";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";

export default function SplashPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value, handleChange } = useForm();
  const [visibleText, setVisibleText] = useState('flex');
  const [visibleForm, setVisibleForm] = useState('hidden');
  const [blur, setBlur] = useState('');

  const setUpBlur = useCallback(function () {
    setBlur('blur-sm');
  });

  const setNoneBlur = useCallback(function () {
    setBlur('');
  });

  useEffect(() => {
    const textDiv = document.getElementById('textForm');
    const loginDiv = document.getElementById('loginForm');
    const bgDiv = document.getElementById('background');
    textDiv.addEventListener('mouseover', setUpBlur);
    textDiv.addEventListener('mouseout', setNoneBlur);
    loginDiv.addEventListener('click', setUpBlur);
    bgDiv.addEventListener('click', setNoneBlur, true);
  })

  const handleSubmit = () => {
    if (value === "") {
      return;
    }
    dispatch(action.addUser(value))
    navigate("/todo");
    // alert(value); m m
  };

  const handleVisibleForm = () => {
    setVisibleText('hidden');
    setVisibleForm('flex')
  }

  return (
    <div className="">
      <div className={`bg-Coffe-bg bg-cover h-screen ${blur} duration-50`} id="background"></div>
      <div className={`absolute right-0 top-1/2 translate-position items-center ${visibleText}`} id="textForm">
        <div className="bg-semi-slate rounded-xl p-8 font-inter text-xl leading-relaxed">
          <h1 className="text-3xl mb-2.5">Hellooo, Fellasss!</h1>
          <h2>Don't let your activities pass you</h2>
          <h2>because you forget them</h2>
          <h2>From now on go note all of your activities</h2>
          <button className="bg-white rounded-lg py-0.5 px-2 mt-4 font-raleway hover:font-semibold hover:border-2 hover:border-slate-900" onClick={handleVisibleForm}>Lanjut >>></button>
        </div>
      </div>
      <div className={`absolute right-0 top-1/2 h-screen justify-center items-center translate-position ${visibleForm}`} id="loginForm">
        <div className="flex flex-col gap-7 w-96 h-56 bg-backdrop text-white rounded-2xl p-6 border-2">
          <h1 className="font-raleway text-2xl">Let me know your name</h1>
          <div className="flex flex-col gap-5">
            <input type="text" name="name" id="name" required value={value} onChange={handleChange} className="rounded-3xl px-3 py-1 text-black" autoComplete="off" />
            <button className="border bg-slate-700 text-white rounded-xl p-1" onClick={handleSubmit}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
