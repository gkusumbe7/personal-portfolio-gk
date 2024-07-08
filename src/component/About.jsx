import {
  CardHeader,
  Tooltip,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import gkimg from "../assets/gkimg.jpg";
//   import {Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Tooltip } from  "@material-tailwind/react"
// import gkimg from "../assets/gkimg.jpg";

export function About() {
  return (
    <>
      {" "}
      <Card className="flex  flex-col-reverse md:flex-row  gap-5 p-5">
      <Card className="mt-6 w-70 ">
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
          <Button>Download</Button>
        </CardFooter>
      </Card>
      
      <Card className="w-80 flex-col mx-20  md:w-auto md:p-4">
        <CardHeader floated={false} className="md:p-2 ">
          <img src={gkimg} alt="profile-picture" className="h-80 w-80 md:h-auto md:w-auto rounded-xl" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-1">
            Ganesh Kusumbe
          </Typography>
          <Typography color="blue-gray" className="font-bold" textGradient>
            Full Stack Developer
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
      </Card>
      
    </>
  );
}
