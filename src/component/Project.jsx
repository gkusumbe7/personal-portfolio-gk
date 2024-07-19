import CardComponent from "./CardComponent";
import Example from "./Example";
import { About } from "./About";
import { ProjectPage } from "./ProjectPage";
function Project() {
  return (
    <>
    <div className="bg-cyan-600 pt-4">

          <main className="md:mx-20 md:flex flex-col gap-5">
         <Example  />
        <div className="md:flex md:flex-col gap-5">
          <About />
          <ProjectPage />
        </div>
      </main>
      </div>

    </>
  );
}
export default Project;
