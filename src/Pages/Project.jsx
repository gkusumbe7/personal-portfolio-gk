import { CardHeader, Card, CardBody, CardFooter,Typography, Button,} from "@material-tailwind/react";
import NavBar from "../component/NavBar";
export default function Project() {
// import imggk from 
 const projectData = [
  { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "../assets/weatherApp.PNG",
    link: "https://www.google.com"
   },
  { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "https://images.unsplash.com/photo-1518791841217-8f162",
    link: "https://www.google.com"
   },
  { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "https://images.unsplash.com/photo-1518791841217-8f162",
    link: "https://www.google.com"
   },
   { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "https://images.unsplash.com/photo-1518791841217-8f162",
    link: "https://www.google.com"
   },
   { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "https://images.unsplash.com/photo-1518791841217-8f162",
    link: "https://www.google.com"
   },
   { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "https://images.unsplash.com/photo-1518791841217-8f162",
    link: "https://www.google.com"
   },
   { 
    id: 1, 
    name: 'Item 1',
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod",
    image: "https://images.unsplash.com/photo-1518791841217-8f162",
    link: "https://www.google.com"
   },
];

  return (
    <>
      <NavBar></NavBar>
      <main className="flex flex-wrap gap-10 items-center justify-center px-10 p-24">
         {
          projectData.map((data)=>(
      <main className="mt-5 border" >
        <Card className="w-96 border border-teal-400 pb-5 ">
            <CardHeader color="blue-gray" className="">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                // src={data.image}
                alt="card-image"
                className="rounded-xl border border-teal-400 "
              />
            </CardHeader>
            <CardBody className="p-3 px-4">
              <Typography variant="h4" color="blue-gray">
               {data.title}
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-1 pb-2 flex justify-around">
              <Button>Read More</Button>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          </main>
          ))
         }

        {/* <main className="flex flex-col-reverse md:flex-row gap-10  md:gap-10 md:p-5 my-1 lg:my-auto">
          <Card className="pb-0">
            <CardHeader color="blue-gray" className="">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="rounded-xl "
              />
            </CardHeader>
            <CardBody className="p-3 px-4">
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-1 pb-2 flex justify-around">
              <Button>Read More</Button>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card className="pb-0">
            <CardHeader color="blue-gray" className="">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="rounded-xl "
              />
            </CardHeader>
            <CardBody className="p-3 px-4">
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-1 pb-2 flex justify-around">
              <Button>Read More</Button>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
          <Card className="pb-0">
            <CardHeader color="blue-gray" className="p-0">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                className="rounded-xl"
              />
            </CardHeader>
            <CardBody className="p-3 px-4">
              <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-1 pb-2 flex justify-around">
              <Button>Read More</Button>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </main> */}
      </main>
    </>
  );
}
