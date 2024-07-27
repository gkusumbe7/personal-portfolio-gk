// import { FaLinkedin } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
      <Card className="bg-gradient-to-b from-cyan-200 to-cyan-400 flex flex-col-reverse md:flex-row  gap-10 md:gap-5 p-5 my-2 lg:my-auto">
      <Card className="text-wrap md:mx-auto">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={downloadCv}>Download</Button>
        </CardFooter>
      </Card>
      
      <Card className=" flex-col  md:w-auto md:p-4">
        <CardHeader floated={false} className="md:p-2 ">
          <img src={gkimg} alt="profile-picture" className="h-80 w-80 md:h-auto md:w-auto rounded-xl" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-1">
            Ganesh Kusumbe
          </Typography>
          <Typography color="blue-gray" className="font-bold" textGradient>
            Full Stack Developer
          </Typography>
        </CardBody>
        <CardFooter className="flex border-black justify-center gap-5 pt-0.5 ">
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