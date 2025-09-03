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
        toast.error("Failed to send message. Please try again." );
      }
    } catch (error) {
      console.error("Error!", error.message);
      toast.error("Failed to send message. "+ error.message, );
    }
  };

  return (
    <>
    <ToastContainer position="bottom-right" autoClose={3000} />
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
              <a
                href="https://linkedin.com/in/ninad-arakh-277747237"
                target="_blank"
              >
                <FaLinkedin className="hover:text-sky-700 hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
              </a>
              <a href="https://github.com/Ninad-arakh" target="_blank">
                <FaGithub className="hover:text-slate-100  hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/ninad_arakh.exe/"
                target="_blank"
              >
                <FaInstagram className="hover:text-pink-600 hover:-translate-y-1 duration-200 mr-8 text-[30px] cursor-pointer" />
              </a>
            </div>
            <a href={ninad} target="_blank">
              <button className=" px-8 py-3 ml-10 sm:ml-0 mt-6 rounded-lg bg-red-500 hover:bg-pink-600">
                Download CV
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
            <button
              className="sm:w-[18%] w-[30%] mx-auto mb-4 px-8 py-3  rounded-lg bg-red-500 hover:bg-pink-600 text-white justify-center"
              type="submit"
              
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {message && 
        <div className="  flex justify-center text-center">
          <span className="bg-green-600 p-2 rounded-xl">
            Mail sent successfully. Thanks for contacting me!
          </span>
        </div>
      }
    </>
  );
});

export default Contact;
