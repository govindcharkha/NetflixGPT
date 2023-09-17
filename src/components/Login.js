import React, { useRef, useState } from "react";
import Header from "../Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BGIMG_URL, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInErrorMsg, setSignInErrorMsg] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const dispatch = useDispatch();

  const newUserSignUpButtonClicked = (e) => {
    e.preventDefault();
    setIsSignIn(false);
  };

  const userValidationOnButtonClick = (e) => {
    e.preventDefault();

    const response = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setSignInErrorMsg(response);

    if (!isSignIn) {
      //Register new user
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setSignInErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In existing user
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <img className="absolute" src={BGIMG_URL} alt="bgrimg" />
        </div>
        <form className="bg-black absolute p-12 w-3/12 my-56 mx-auto right-0 left-0 opacity-80 rounded-3xl text-white">
          <h1 className="p-2 font-bold text-3xl text-white">
            {isSignIn ? "Sign In" : "Please register yourself once"}
          </h1>
          {!isSignIn && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Enter Your Name"
              className="p-2 my-4 bg-gray-700 rounded-lg w-full"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Enter email"
            className="p-2 my-4 bg-gray-700 rounded-lg w-full"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
            className="p-2 my-4 bg-gray-700 rounded-lg w-full"
          />
          <button
            className="bg-red-600 p-2 my-6 rounded-lg w-full"
            onClick={userValidationOnButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <h4 className="text-red-700 font-extrabold py-2">{signInErrorMsg}</h4>
          {isSignIn ? (
            <p>
              New to NetflixGPPT?{" "}
              <button
                className="font-bold"
                onClick={newUserSignUpButtonClicked}
              >
                Sign Up now
              </button>
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
