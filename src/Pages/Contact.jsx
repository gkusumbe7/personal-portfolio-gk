// import { FaLinkedin } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {
  Card,
  Button,
} from "@material-tailwind/react";

import NavBar from "../component/NavBar";
function Contact() {
    
    const downloadCv = ()=>{
      const cvUrl = '..assets/GaneshKusumbeCV.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Ganesh Kusumbe CV';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild();
    }
  return (
    <>
    
    <NavBar></NavBar>
      {" "}
    <main className="pt-24  md:px-10  flex justify-center">
   <Card className="md:w-1/2  md:justify-center md:items-center border border-teal-400  rounded-xl md:rounded-xl 
                    bg-gradient-to-r from-teal-100 to-teal-100 
                    font-semibold flex flex-col gap-8 md:gap-5 p-10 md:p-10 ">
    <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-gray-900">Name</label>
        <input type="text" name="" id="nameId" placeholder="Enter Name" 
        className="md:w-80 rounded-md p-2"/>
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-900">Email</label>
        <input type="text" name="" id="nameId" placeholder="Enter Email" 
        className="md:w-80 rounded-md p-2"/>
    </div>

    <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-gray-900">Message</label>
        <textarea name="message" id="messageId" className="md:w-80 rounded-md p-2"></textarea>
    </div>
  <Button type="submit" className="md:w-40 bg-blue-gray-900 shadow-2xl">Contact Us</Button>
    <div className="flex justify-center items-center gap-4 text-xl">
        <a href="https://www.linkedin.com/in/ganesh-kusumbe/"><FaLinkedin className="text-2xl text-blue-400"/></a> 
        <a href="https://github.com/gkusumbe7"><FaGithub className="text-2xl text-black"/></a>
        <a href="https://www.instagram.com/ganesh.kusumbe/"><FaInstagram className="text-2xl text-red-400"/></a>
     
    </div>      
      </Card>
      </main>
    </>
  );
}
export default Contact;