// import { FaLinkedin } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import {
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Navbar,
} from "@material-tailwind/react";

import gkimg from "../assets/gkimg.jpg";
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
        <label htmlFor="name">Name</label>
        <input type="text" name="" id="nameId" placeholder="Enter Name" 
        className="md:w-80 rounded-md p-2"/>
    </div>
    <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input type="text" name="" id="nameId" placeholder="Enter Email" 
        className="md:w-80 rounded-md p-2"/>
    </div>

    <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="messageId" className="md:w-80 rounded-md p-2"></textarea>
    </div>
  <Button type="submit" className="md:w-40 bg-blue-gray-900 shadow-2xl">Contact Us</Button>
      </Card>
      </main>
    </>
  );
}
export default Contact;