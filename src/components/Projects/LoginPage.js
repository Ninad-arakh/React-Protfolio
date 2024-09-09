import React from "react";
import loginPage from "../../Assets/LoginPage.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  useProject();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/singleProject?name=" + "LoginVista");
  };
  return (
    <div
    className={`sm:w-[32%] w-[90%] my-[2%] sm:my-0 h-[32%] mx-auto sm:h-[100%] py-2 border sm:mx-[2%] group rounded-3xl overflow-hidden  hover:scale-110 duration-500`}
    >
      <div>
        <img alt="img" src={loginPage} />
      </div>

      <div className="bg-gradient-to-t from-pink-600 pb-[9%] sm:pb-[0.5px] group-hover:-translate-y-[100%] duration-200">
        <p className="text- bg-black bg-opacity-50 px-[2%] sm:px-[15%] sm:mb-5">
          LoginVista is an elegantly designed login page built using just HTML,
          CSS, and JavaScript. This minimalist yet visually interface focuses on
          providing a seamless and stylish user authentication experience.
          <img
            className=" bg-white rounded-full border-2 mt-10 mb-25 border-stone-800 hover:border-purple-400  opacity-0 group-hover:opacity-80 h-12  w-12 mx-[42%] sm:mx-[35%]  justify-center cursor-pointer"
            src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
            onClick={handleClick}
          />
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
