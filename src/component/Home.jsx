import { MdOutlineLightMode } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";


import gkimg from "../assets/gkimg.jpg";
const Home = () => {
  return (
    <>
      <header className="flex flex-col font-sans md:px-12">
        <nav className=" border border-black flex justify-between md:py-2 text-gray-600 font-medium items-center">
          <div>
            <img src="" alt="logo" />
          </div>

          <div className="flex gap-4">
            <p>About</p>
            <p>Work</p>
            <p>Project</p>
            <p>Contact</p>
            <p className="text-gray-300">|</p>
            <p className="py-0.5  text-xl border  border-0">
              <MdOutlineLightMode />
            </p>
            <button className="bg-black px-2 py-0.5text-sm text-white font-normal  rounded-md ">
              Download CV
            </button>
          </div>
        </nav>
        <div className="flex flex-col-reverse border gap-5 items-center md:flex-row border py-5 md:py-24 md:justify-between ">
          <section className="flex flex-col gap-2 border w-3/4 md:w-3/5">
            <div className="font-bold text-4xl flex ">
              Hi, I'm Ganesh{" "}
              <span className="text-yellow-400 inline py-1">
                <PiHandWavingFill />
              </span>
            </div>
            <p className="text-md text-gray-500 font-semibold">
              I am a passionate [Your Profession] with a knack for [Key Skills
              or Specialization]. With a background in [Relevant Experience or
              Education], I have successfully [Achievements or Projects]. My
              portfolio showcases my dedication to [Your Industry or Field],
              highlighting my creativity, problem-solving skills, and commitment
              to excellence.
            </p>
            <div className=" text-md flex gap-2 items-center "><span className="text-bold text-xl"><IoLocationOutline /></span><span>Nagpur Maharashtra</span></div>
            <div className="flex gap-2 text-2xl ">
              <span className="text-black"><FaGithub/></span>
              <span className="text-sky-600"><FaLinkedin/></span>
              <span className="text-orange-400 rounded-4xl" ><FaInstagramSquare/></span>
            </div>
          </section>
          <section className="mx-24">
            <div className="bg-blue-200 p-2 rounded-lg">
             <img src={gkimg} alt="logo" className="rounded-lg "/>  
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Home;
