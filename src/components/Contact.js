import React from "react";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxNFG6uSCp3ajtZWUx3VjAeCQxSE6gY6ZKfdL6RuNc2RdDoxen1KyweHosSsX4sqxXt/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //       .then((response) => {
  //         msg.innerHTML = "Message sent successfuly!";
  //         setTimeout(function () {
  //           msg.innerHTML = "";
  //         }, 5000);
  //         form.reset();
  //       })
  //       .catch((error) => console.error("Error!", error.message));
  //   });

  return (
    <div className="flex  mt-[5%] h-96 mx-[3%]">
      <div className="text-white px-[5%] pt-[2%] ">
        <h1 className="text-[35px] ">Contact Me</h1>
        <br></br>
        <div>
          <h1 className="flex  ">
            <span>
              <IoMail className="mt-1 text-[30px] font-thin mr-4 text-pink-600" />
            </span>
            arakhninad@gmail.com
          </h1>
          <br></br>
          <h1 className="flex  ">
            <span>
              <BiSolidPhoneCall className="mt-1 text-[30px] font-thin mr-4 text-pink-600" />
            </span>
            +91 0000000000
          </h1>
          <br></br>
          <div className="flex my-[2%]">
            <FaLinkedin className="hover:text-pink-600 hover:-translate-y-1 mr-8 text-[30px]" />
            <FaGithub className="hover:text-pink-600 hover:-translate-y-1 mr-8 text-[30px]" />
            <FaInstagram className="hover:text-pink-600 hover:-translate-y-1 mr-8 text-[30px]" />
          </div>
          <button className=" px-8 py-3 mt-6 rounded-lg bg-red-500 hover:bg-pink-600">
            Download CV
          </button>
        </div>
      </div>
      <div className=" ml-4 w-full px-4 justify-center">
        <form className=" flex flex-col justify-center">
          <input
            className="w-full bg-gray-700 h-12 mt-10 rounded-xl pl-5"
            type="text"
            name="name"
            placeholder=" Your Name"
            required
          />
          <input
            className="w-full bg-gray-700 h-12 mt-10 rounded-xl pl-5"
            type="Email"
            name="email"
            placeholder=" abc@example.com"
            required
          />
          <input
            className="w-full bg-gray-700 h-16 my-8 rounded-xl pl-5"
            type="text"
            name="message"
            placeholder=" Your Message"
            rows="6"
          />
          <button className="w-[18%] mx-auto mb-4 px-8 py-3  rounded-lg bg-red-500 hover:bg-pink-600 text-white justify-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
