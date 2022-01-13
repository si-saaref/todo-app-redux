import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { nameRootSelector } from "../../config/redux/name/selector";
import * as action from "../../config/redux/name/actions"

export default function TodoPage() {
  const nameState = useSelector(nameRootSelector, shallowEqual);
  const dispatch = useDispatch();
  const userName = nameState.userName;

  useEffect(() => {
    dispatch(action.getUser());
    console.log(nameState);
  })

  return (
    <h1>{`Hai ${userName}`}</h1>
  );
};
