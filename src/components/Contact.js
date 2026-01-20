import React, { useRef, useState } from "react";
import { IoMail } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ninad from "../Assets/NINAD_ARAKH.pdf";
import { run } from "../Utils/sendEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    try {
      const response = await run(senderName, senderEmail, senderMessage);
      console.log("Response:", response);

      if (response?.$metadata?.httpStatusCode === 200) {
        setMessage("Message sent successfully!");
        form.reset();
        setTimeout(() => setMessage(""), 5000);
      } else {
        throw new Error("Error sending message. Please try again.");
        // toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      toast.error("Failed to send message. " + error.message);
    }
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div ref={ref} className="sm:flex  mt-[5%] sm:h-96 mx-[3%]">
        <div className="text-white px-[5%] pt-[2%] ">
          <h1 className="text-[35px] ">Contact Me</h1>
          <br></br>
          <div className=" pl-[15%] py-[2%]  sm:py-0 sm:pl-0  flex flex-col ">
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
            <div className="flex my-[2%]  sm:ml-0 justify-around items-center ">
              <a
                href="https://linkedin.com/in/ninad-arakh-277747237"
                target="_blank"
                 rel="noreferrer noopener"
              >
                <FaLinkedin className="hover:text-sky-700 hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
              </a>
              <a href="https://github.com/Ninad-arakh" target="_blank"  rel="noreferrer noopener">
                <FaGithub className="hover:text-slate-100  hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/ninad_arakh.exe/"
                target="_blank"
                 rel="noreferrer noopener"
              >
                <FaInstagram className="hover:text-pink-600 hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
              </a>
            </div>

            <a
              href={ninad}
              target="_blank"  rel="noreferrer noopener"
              className="flex  justify-center mt-10"
            >
              {/* <button className=" px-8 py-3 ml-10 sm:ml-0 mt-6 rounded-lg bg-red-500 hover:bg-pink-600">
                Download CV
              </button> */}
              <button className="relative inline-flex items-center justify-start  px-10 py-3 overflow-hidden font-bold rounded-full group ">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-pink-500 opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-pink-500 opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-white">
                  View CV
                </span>
                <span className="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
              </button>
            </a>
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
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <input
              className="w-full bg-gray-700 h-12 mt-10 rounded-xl pl-5"
              type="Email"
              name="email"
              placeholder="Your Email :  abc@example.com"
              required
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
            <input
              className="w-full bg-gray-700 h-16 my-8 rounded-xl pl-5"
              type="text"
              name="message"
              placeholder=" Your Message"
              rows="6"
              value={senderMessage}
              onChange={(e) => setSenderMessage(e.target.value)}
            />
            {/* <button
              className="sm:w-[18%] w-[30%] mx-auto mb-4 px-8 py-3  rounded-lg bg-red-500 hover:bg-pink-600 text-white justify-center"
              type="submit"
            >
              Submit
            </button> */}
            <button
              className="relative inline-flex items-center justify-start  px-10 py-3 overflow-hidden font-bold rounded-full group sm:w-[18%] w-[30%] mx-auto"
              type="submit"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-pink-500 opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-pink-500 opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-center text-white  transition-colors duration-200 ease-in-out group-hover:text-white">
                Submit
              </span>
              <span className="absolute inset-0 border-2 border-pink-500 rounded-full"></span>
            </button>
          </form>
        </div>
      </div>
      {message && (
        <div className="  flex justify-center text-center">
          <span className="bg-green-600 p-2 rounded-xl">
            Mail sent successfully. Thanks for contacting me!
          </span>
        </div>
      )}
    </>
  );
});

export default Contact;
