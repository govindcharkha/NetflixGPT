import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

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
    <div className="absolute w-full py-2 bg-gradient-to-b from-black z-10 opacity-70 flex justify-between">
      <img
        className="w-44"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAB+CAMAAAAKn+3gAAAAaVBMVEUQEBDlCRMAEBDoCRPrCRPwCRN1DhEHEBCaDRLMChQLEBBpDhHTCxNJDxFBEBGwCxIhEBA8DxE3DxC2CxKODRJtDhDdChOFDRMqEBEbEBBiDhGgDRH2CBN6DhExDxDFCxNSDxBaDxGoDBP5kXcPAAAETUlEQVR4nO2Z2ZaCOBBAk5AQRBRtZFMR5P8/cqpChKC27cw5hIep+9DNTq4JVRVgjCAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIYgkEEs8XtXCJ7Z6J5yO0PeLtdR9HjNeN/fp1YRg2Q0vODSzXMdM/oUMOW9z1sNkyfZht+dHxHc5t3Otu8dQqZiLEPTc01HVjN/oUvFyVujb444sWFuWPZiKHhZGiEixw1tV1U4u9u0HlgmV4mcPUdJHAerETTPS4pxfjvTLmVzAKOOeZGYeZ5AFHwS1uswQJCBbcIWhB0N3At4KlknPlCm4COBUFd7CHFzEMjNsGr5uLD81ZSrDY6e8F5b8SjA8t7oJDRIiXTXw/g0ZQnsSLYDAgcYgW8N/6wtIoKO0xnwSZaOBqwUYMptfQbwc+BFto21xQpqeBEoJMCf+jBLYmuBQyIxhsSnvI8aPgHk/knbib34jpNQQDE1tmgqp8ShP4BEFHmHRgBGXmpInfBZlIsQsjgYfIi+cOtIJcReJVcHagPg6Cw1lWcNr9SbCTGJl2CrYU3UqCQbGcYCwKuF7R4imp3wjDRkGuOrGUIBMnZcIT/PEdYiZBmb4Kzsqvt4JTGfZJUN/4cBOMpX71JsEgOT5F0eh+Rh6Gr4I2ipZH/YdgbPbiMGm8d+AoiKNnngcLQ/K7ILd58o7bPgkOqRCpPecI5gjKFBv5XMlg8Bl4I2iP+FtQV6ZIw1DtHSMYtBjBb28E+Z+C/AtBKLPxLv5zBHsIniCQq+1cUCKKfxqiZm4RnL8QjDAVJvu1BGWeYuP7WZBp+8slukQfgkzbYRS6m/nd52dwqNbWiDFW8HzCBmCbpjTR/Jkm0rGU+0uwlMM0ZDXB7e4RMpZI9DCPsNVEtVKakLmwTVimkrkrW0306wk2akFBnAiaSUty8J4IH4KH3wRj2+hvBGuhdTyc4M4mbkPdwNerRUEQy5hnQRNB6sP3gt3+eKsOtXmN6M4HcSLYl1Bty8y33yQYPgnKPjxFUZ9m6TDwvhDkRbJp2yxL8V2TO6PHK29juUquHwV3JlXNKpnA5Pqi+lpwKE4lvkZ0BEssJRIYI+r1yfYnyET/IminGd8LWuRWuG/VsA4FZ9GZKb3vCdMk2PD3go8e3CdXdS1GQegqVzC7mu6WQfAkCDkCBy+Lh4pb+R6jo6CuiklQ4kCDOhNQtgfjqinD3E4P47oDnNJSb09R36ftJim4uuLvlSgpjaB5LYoVn4iUKX9WEoRgB02SRvCcQCFa5ud97XwsiWeV2/RFZVp3v86IPLpk2V6LIxS40sQW0RU4Ro++32xDA1Ro7t+ml6g8zD4m/fe8bE/Xt7w5RSV+j4hFi0/hybNgf+VJNlQcFVvg45aeOl7c+7ZQG79fl+J6akC89J3Nrap64bs8oX1Xh/5frBEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8f/gHzKASbm8IONFAAAAAElFTkSuQmCC"
        alt="Logo"
      />

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
