import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {
  Card,
  Button,
} from "@material-tailwind/react";

import NavBar from "../component/NavBar";
import { useRef } from "react";
function Contact() {
  
  const form = useRef();
  const  sendEmail= (e) =>{
      e.preventDefault();
      emailjs
        .sendForm('service_gbh8yof', 'template_obpzeba', form.current, {
          publicKey: 'L6kWLi0xlEh3h6BvJ',
        })
        .then(
          () => { 
            const notify = () => toast("Message sent successfully");
            notify();
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  return (
    <>
    <NavBar></NavBar> 
    <form  ref={form} onSubmit={sendEmail} className="pt-24  md:px-10  flex justify-center">
          <Card className="md:w-1/2  md:justify-center md:items-center border border-teal-400  rounded-xl md:rounded-xl 
                    bg-gradient-to-r from-teal-100 to-teal-100 
                    font-semibold flex flex-col gap-8 md:gap-5 p-10 md:p-10 ">
              <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-900">Name</label>
                  <input type="text" name="name" id="nameId" placeholder="Enter Name" 
                  className="md:w-80 rounded-md p-2"/>
              </div>
              <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-900">Email</label>
                  <input type="email" name="email" id="nameId" placeholder="Enter Email" 
                  className="md:w-80 rounded-md p-2"/>
              </div>

              <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-gray-900">Message</label>
                  <textarea name="message" rows="3" id="messageId" 
                  className="md:w-80 rounded-md p-2"></textarea>
              </div>
          
            <Button type="submit" value="Send"  className="md:w-40 bg-blue-gray-900 shadow-2xl">Send</Button>
            <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
              <div className="flex justify-center items-center gap-4 text-xl">
                  <a href="https://www.linkedin.com/in/ganesh-kusumbe/"><FaLinkedin className="text-2xl text-blue-400"/></a> 
                  <a href="https://github.com/gkusumbe7"><FaGithub className="text-2xl text-black"/></a>
                  <a href="https://www.instagram.com/ganesh.kusumbe/"><FaInstagram className="text-2xl text-red-400"/></a>
              </div>      
      </Card>
      </form>
    </>
  );
}
export default Contact;