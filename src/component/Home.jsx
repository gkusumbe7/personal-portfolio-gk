import { MdOutlineLightMode } from "react-icons/md";
import { PiHandWavingFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <header className="flex flex-col font-sans px-6">
        <nav className=" border border-black flex justify-between py-2 text-gray-600 font-medium items-center">
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
        <div className="flex py-6">
          <section className="w-1/2">
            <div className="font-bold text-3xl flex ">
              Hi, I'm Ganesh{" "}
              <span className="text-yellow-400 inline py-1">
                <PiHandWavingFill />
              </span>
            </div>
            <p className="text-sm text-gray-500 t">
              I am a passionate [Your Profession] with a knack for [Key Skills
              or Specialization]. With a background in [Relevant Experience or
              Education], I have successfully [Achievements or Projects]. My
              portfolio showcases my dedication to [Your Industry or Field],
              highlighting my creativity, problem-solving skills, and commitment
              to excellence.
            </p>
            <p>Nagpur Maharashtra</p>
            <p>
              <span>L</span>
              <span>L</span>
              <span>L</span>
            </p>
          </section>
          <section className="w-1/2">
            <img src="" alt="logo" />
          </section>
        </div>
      </header>
    </>
  );
};

export default Home;
