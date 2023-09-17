import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO } from "./utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //this will be called when component is unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full py-2 bg-gradient-to-b from-black z-10 opacity-70 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 opacity-70"
            src={user?.photoURL}
            alt="userIcon"
          />{" "}
          <button className="font-bold p-4" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
