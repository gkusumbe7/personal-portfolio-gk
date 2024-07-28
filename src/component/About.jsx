// import { FaLinkedin } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


import {
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import gkimg from "../assets/gkimg.jpg";
function About() {
    const downloadCv = ()=>{
      const cvUrl = 'src/assets/GaneshKusumbeCV.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Ganesh Kusumbe CV';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild();
    }
  return (
    <>
      {" "}
      <main className="pt-24 pb-0 px-10">
      <Card className="bg-gradient-to-b from-cyan-200 to-cyan-400 flex flex-col-reverse md:flex-row  gap-10  md:gap-5 p-5 my-2 lg:my-auto">
      <Card className="text-wrap md:mx-auto bg-gradient-to-r from-gray-50 to-gray-100">
        <CardBody>
          <Typography variant="h4" color="blue-gray" className=" mb-2">
          About Me
          </Typography>
          <Typography>
          I'm a frontend developer with a strong command of HTML, CSS, Tailwind CSS, JavaScript, and React. My primary focus is to build websites that are not only functional and user-friendly but also visually appealing. I ensure that each site I work on is easy to navigate, performs well, and looks great across different devices and screen sizes.
          <br /> <br />
          Beyond just functionality, I take pride in adding a personal touch to each project. My goal is to make sure your website reflects your brand's identity and engages visitors effectively. I strive to create user experiences that are both seamless and memorable, combining technical skill with creative design to deliver the best results.
          </Typography>
          <div className="flex flex-col md:flex-row gap-8 mt-14">
               <Card className="p-3 flex flex-row gap-3 items-center">
                  <div>
                  <MdOutlineMailOutline className="text-3xl p-1 shadow-lg rounded-[4px]"/>
                  </div> 
                  <div>
                    <p className="text-[12px] font-semibold">Email</p>
                    <p className="text-[14px] text-black">gkusumbe7@gmail.com</p>
                  </div>
               </Card>
               <Card className="p-3 flex flex-row gap-3 items-center">
                  <div>
                  <MdLocalPhone className="text-3xl p-1 shadow-lg rounded-[4px]"/>
                  </div> 
                  <div>
                    <p className="text-[12px] font-semibold">Birthday</p>
                    <p className="text-[14px] text-black">Sept 12, 2000</p>
                  </div>
               </Card> 
               <Card className="p-3 flex flex-row gap-3 items-center">
                  <div>
                  <MdLocalPhone className="text-3xl p-1 shadow-lg rounded-[4px]"/>
                  </div> 
                  <div>
                    <p className="text-[12px] font-semibold">Phone</p>
                    <p className="text-[14px] text-black">+91-9172319749</p>
                  </div>
               </Card>
               <Card className="p-3 flex flex-row gap-3  items-center">
                  <div>
                  <IoLocationOutline className="text-3xl p-1 shadow-lg rounded-[4px]"/>
                  </div> 
                  <div>
                    <p className="text-[12px] font-semibold">Location</p>
                    <p className="text-[14px] text-black">Nagpur, Maharashtra</p>
                  </div>
               </Card>         
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={downloadCv}>Download CV</Button>
        </CardFooter>
      </Card>
      
      <Card className="flex flex-col items-center md:w-auto md:p-4">
        <CardHeader floated={false} className="md:p-2 md:w-60 " >
          <img src={gkimg} alt="profile-picture" className="h-60 w-60 md:h-60 md:w-60 rounded-xl" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="w-68 mb-1">
            Ganesh Kusumbe
          </Typography>
          <Typography color="blue-gray" className="font-bold" textGradient>
            Full Stack Developer
          </Typography>
        </CardBody>
        <CardFooter className="flex border-black justify-around md:justify-center gap-6  md:gap-5 p-2 ">
        <a href="https://www.linkedin.com/in/ganesh-kusumbe/"><FaLinkedin className="text-2xl text-blue-400"/></a> 
        <a href="https://github.com/gkusumbe7"><FaGithub className="text-2xl text-black"/></a>
        <a href="https://www.instagram.com/ganesh.kusumbe/"><FaInstagram className="text-2xl text-red-400"/></a>
      </CardFooter>
      </Card>
      </Card>
      
      </main>
     
    </>
  );
}
export default About;