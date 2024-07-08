import {Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip } from  "@material-tailwind/react"
import gkimg from "../assets/gkimg.jpg";
    const CardComponent = () =>{
    return(
        <>
        
  <Card className="w-72">
    <CardHeader floated={false} className="h-72">
      <img src={gkimg} alt="profile-picture" className="h-72 w-72" />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h4" color="blue-gray" className="mb-2">
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
  </>
    );
}

export default CardComponent;