import React, { useRef, useState } from "react";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxNFG6uSCp3ajtZWUx3VjAeCQxSE6gY6ZKfdL6RuNc2RdDoxen1KyweHosSsX4sqxXt/exec";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        form.reset();
        setTimeout(() => setMessage(""), 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
  };

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //     .then((response) => {
  //       msg.innerHTML = "Message sent successfuly!";
  //       setTimeout(function () {
  //         msg.innerHTML = "";
  //       }, 5000);
  //       form.reset();
  //     })
  //     .catch((error) => console.error("Error!", error.message));
  // });

  return (
    <div ref={ref} className="sm:flex  mt-[5%] sm:h-96 mx-[3%]">
      <div className="text-white px-[5%] pt-[2%] ">
        <h1 className="text-[35px] ">Contact Me</h1>
        <br></br>
        <div className=" pl-[15%] py-[2%]  sm:py-0 sm:pl-0">
          <h1 className="flex text-xl sm:text-lg ">
            <span>
              <IoMail className="mt-1 text-[30px] font-thin mr-4 text-pink-600" />
            </span>
            arakhninad@gmail.com
          </h1>
          <br></br>
          <h1 className="flex text-xl sm:text-lg ">
            <span>
              <BiSolidPhoneCall className="mt-1 text-[30px] font-thin mr-4 text-pink-600" />
            </span>
            +91 0000000000
          </h1>
          <br></br>
          <div className="flex my-[2%] -ml-[16%] sm:ml-0 justify-evenly ">
            <a href="https://linkedin.com/in/ninad-arakh-277747237">
              <FaLinkedin className="hover:text-sky-700 hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
            </a>
            <a href="https://github.com/Ninad-arakh">
              <FaGithub className="hover:text-slate-100  hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/ninad_arakh.exe/">
              <FaInstagram className="hover:text-pink-600 hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
            </a>
          </div>
          <button className=" px-8 py-3 ml-10 sm:ml-0 mt-6 rounded-lg bg-red-500 hover:bg-pink-600">
            Download CV
          </button>
        </div>
      </div>
      <div className=" sm:ml-4 w-full px-4 justify-center ">
        <form
          className=" flex flex-col justify-center text-white"
          ref={formRef}
          onSubmit={handleSubmit}
        >
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
          <button
            className="sm:w-[18%] w-[30%] mx-auto mb-4 px-8 py-3  rounded-lg bg-red-500 hover:bg-pink-600 text-white justify-center"
            type="submit"
          >
            Submit
          </button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
});

export default Contact;
