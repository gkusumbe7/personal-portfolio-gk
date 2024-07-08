import CardComponent from "./CardComponent";
import Example from "./Example";
import { About } from "./About";
function Project (){
    return(
        <>
        <main className="md:mx-20 flex flex-col gap-5">
        
        <Example />
    
    <div className="flex justify-center gap-20">
    <About />
    {/* <CardComponent/> */}
    </div>
                </main>
        
        </> 
    )
}
export default Project;