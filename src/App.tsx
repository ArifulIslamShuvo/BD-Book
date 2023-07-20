/* eslint-disable react-hooks/rules-of-hooks */

import { ToastContainer } from "react-toastify";
import MainLayout from "./layouts/Mainlayout";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { auth } from "./firebase/firebase.config";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);
  return (
    <div>
      <MainLayout />
      <ToastContainer />
    </div>
  );
}

export default App;
