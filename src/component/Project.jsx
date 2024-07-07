import CardComponent from "./CardComponent";
import Example from "./Example";

function Project (){
    return(
        <>
        <main className="md:mx-20 flex flex-col gap-5">
        <Example />
        <CardComponent/>
        </main>
        
        </>
    )
}
export default Project;