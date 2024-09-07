import React from "react";
import loginPage from "../../Assets/LoginPage.png";
import useProject from "../../Hook/useProject";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  useProject();

  const handleClick = () => {
    navigate("/singleProject?name=" + "LoginVista");
  };
  return (
    <div
      className={`w-[32%] h-[48vh] py-2 border mx-[2%] group rounded-3xl overflow-hidden cursor-pointer hover:scale-110 duration-500`}
    >
      <div>
        <img alt="img" src={loginPage} />
      </div>

      <div className="bg-gradient-to-t from-pink-600 group-hover:-translate-y-[110%] duration-200 ">
        <p className="text- bg-black bg-opacity-50  px-[20%] mb-5">
          LoginVista is an elegantly designed login page built using just HTML,
          CSS, and JavaScript. This minimalist yet visually interface focuses on
          providing a seamless and stylish user authentication experience.
          <img
            className=" bg-white rounded-full border-2 mt-10 mb-25 border-stone-800 hover:border-purple-400  opacity-0 group-hover:opacity-80 h-12  w-12  mx-[10vh]  justify-center"
            src="https://brandeps.com/icon-download/L/Link-icon-vector-01.svg"
            onClick={handleClick}
          />
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
