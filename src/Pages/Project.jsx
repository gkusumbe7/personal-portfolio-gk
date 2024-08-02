import {
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import NavBar from "../component/NavBar";
export default function Project() {
  // import imggk from
  const projectData = [
    {
      id: 1,
      name: "Item 1",
      title: "Weather App",
      description:"Get real-time updates on temperature, humidity, wind speed, and more",
      image: "https://raw.githubusercontent.com/gkusumbe7/personal-portfolio-gk/main/src/assets/weatherApp.PNG",
      codelink: "https://github.com/gkusumbe7/weather-app",
      liveLink:"https://weather-app-eight-theta-13.vercel.app/"
    },
    {
      id: 1,
      name: "Item 1",
      title: "Weather App",
      description:"Get real-time updates on temperature, humidity, wind speed, and more",
      image: "../assets/weatherApp.PNG",
      codelink: "https://github.com/gkusumbe7/weather-app",
      liveLink:"https://weather-app-eight-theta-13.vercel.app/"
    },
    {
      id: 1,
      name: "Item 1",
      title: "Weather App",
      description:"Get real-time updates on temperature, humidity, wind speed, and more",
      image: "../assets/weatherApp.PNG",
      codelink: "https://github.com/gkusumbe7/weather-app",
      liveLink:"https://weather-app-eight-theta-13.vercel.app/",
      techicalLanguages:"React js , Tailwind Css"
    },
    {
      id: 1,
      name: "Item 1",
      title: "Weather App",
      description:"Get real-time updates on temperature, humidity, wind speed, and more",
      image: "../assets/weatherApp.PNG",
      codelink: "https://github.com/gkusumbe7/weather-app",
      liveLink:"https://weather-app-eight-theta-13.vercel.app/"
    },
  ];

  return (
    <>
      <NavBar></NavBar>
      <main className="flex flex-wrap gap-10 items-center justify-center px-10 p-24">
        {projectData.map((data) => (
          <main className="mt-5 border">
            <Card className="w-96 border border-teal-400 pb-5 ">
              <CardHeader color="blue-gray" className="">
                <img
                  // src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  src={data.image}
                  alt="card-image"
                  className="rounded-xl border border-teal-400 "
                />
              </CardHeader>
              <CardBody className="p-3 px-4">
                <Typography variant="h4" color="blue-gray">
                  {data.title}
                </Typography>
                <Typography>
                  {data.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-1 pb-2 flex justify-around">
                <Button><a href={data.codelink}>CODE</a></Button>
                <Button><a href={data.liveLink}>LIVE</a></Button>
              </CardFooter>
            </Card>
          </main>
        ))}

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
