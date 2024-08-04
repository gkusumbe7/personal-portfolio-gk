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
      id: 2,
      name: "Food Recipe  App",
      title: "Food Recipe  App",
      description:"A food recipe app offers a variety of recipes with searchable ingredients, cooking instructions, and meal planning tools, helping users easily find and prepare meals.",
      image: "https://raw.githubusercontent.com/gkusumbe7/personal-portfolio-gk/main/src/assets/FRA.PNG",
      codelink: "https://github.com/gkusumbe7/foodDeliveryApp",
      liveLink:"https://geekfood-drab.vercel.app/"
    },
    {
      id: 3,
      name: "TWUBRIC APP",
      title: "TWUBRIC APP",
      description:"Rate and review tweets and Twitter accounts effortlessly. Discover trending content and engage with the community through our intuitive rating system.",
      image: "https://raw.githubusercontent.com/gkusumbe7/personal-portfolio-gk/main/src/assets/TA.PNG",
      codelink: "https://github.com/gkusumbe7/Twubric-App",
      liveLink:"https://twubric-app.vercel.app/"
    },
    {
      id: 4,
      name: "Password Generator App",
      title: "Password Generator App",
      description:"The Password Generator App creates strong, secure passwords with customizable options for length and complexity, ensuring your online accounts are protected.",
      image: "https://raw.githubusercontent.com/gkusumbe7/personal-portfolio-gk/main/src/assets/PG.PNG",
      codelink: "https://github.com/gkusumbe7/Password-Generator",
      liveLink:"https://password-generator-lac-six.vercel.app/"
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
              <a href={data.codelink}><Button>CODE</Button></a>
              <a href={data.liveLink}><Button>LIVE</Button></a>
              </CardFooter>
            </Card>
          </main>
        ))}
      </main>
    </>
  );
}
