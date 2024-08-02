import { BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
// import Project from "./component/Project"
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import { Route , Routes } from "react-router-dom";
export default function App() {
  return (
      <Routes>
        <Route  path="/" element={<Home></Home>} />
        <Route path="/Project" element={<Project></Project>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes> 
    )
}