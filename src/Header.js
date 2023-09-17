import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { LOGO } from "./utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="Logo" />

      {user && (
        <div className="flex p-2 justify-between">
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />{" "}
          <button className="font-bold text-white" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
