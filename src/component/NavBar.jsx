import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom"
export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div>
        <ul className="mb-4 flex flex-col gap-5 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
            <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="flex items-center hover:bg-blue-gray-300 w-80 rounded-lg  gap-x-2 p-2 font-medium lg:text-[18px]"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            fill="white"
            >
            <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
        </svg>
        <Link to={"/"} className="flex items-center font-semibold text-white">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:bg-blue-gray-300 w-80 rounded-lg gap-x-2 p-1 font-medium lg:text-[18px]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V4.5C0 5.03043 0.210714 5.53914 0.585786 5.91421C0.960859 6.28929 1.46957 6.5 2 6.5H4C4.53043 6.5 5.03914 6.28929 5.41421 5.91421C5.78929 5.53914 6 5.03043 6 4.5V2.5C6 1.96957 5.78929 1.46086 5.41421 1.08579C5.03914 0.710714 4.53043 0.5 4 0.5H2ZM2 8.5C1.46957 8.5 0.960859 8.71071 0.585786 9.08579C0.210714 9.46086 0 9.96957 0 10.5V12.5C0 13.0304 0.210714 13.5391 0.585786 13.9142C0.960859 14.2893 1.46957 14.5 2 14.5H4C4.53043 14.5 5.03914 14.2893 5.41421 13.9142C5.78929 13.5391 6 13.0304 6 12.5V10.5C6 9.96957 5.78929 9.46086 5.41421 9.08579C5.03914 8.71071 4.53043 8.5 4 8.5H2ZM8 2.5C8 1.96957 8.21071 1.46086 8.58579 1.08579C8.96086 0.710714 9.46957 0.5 10 0.5H12C12.5304 0.5 13.0391 0.710714 13.4142 1.08579C13.7893 1.46086 14 1.96957 14 2.5V4.5C14 5.03043 13.7893 5.53914 13.4142 5.91421C13.0391 6.28929 12.5304 6.5 12 6.5H10C9.46957 6.5 8.96086 6.28929 8.58579 5.91421C8.21071 5.53914 8 5.03043 8 4.5V2.5ZM8 10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5H12C12.5304 8.5 13.0391 8.71071 13.4142 9.08579C13.7893 9.46086 14 9.96957 14 10.5V12.5C14 13.0304 13.7893 13.5391 13.4142 13.9142C13.0391 14.2893 12.5304 14.5 12 14.5H10C9.46957 14.5 8.96086 14.2893 8.58579 13.9142C8.21071 13.5391 8 13.0304 8 12.5V10.5Z"
            fill="white"
          />
        </svg>
        <Link to={"/Project"} className="flex items-center font-semibold text-white">
          Project
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center hover:bg-blue-gray-300 w-80 rounded-lg gap-x-2 p-1 font-medium lg:text-[18px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
          fill="white"
        >
          <path d="M 13 4 C 8.038 4 4 8.037 4 13 L 4 37 C 4 41.963 8.038 46 13 46 L 37 46 C 37.338 46 37.671 45.978406 38 45.941406 L 38 4.0585938 C 37.671 4.0215938 37.338 4 37 4 L 13 4 z M 40 4.5253906 L 40 14 L 46 14 L 46 13 C 46 9.09 43.49 5.7643906 40 4.5253906 z M 22 12 C 29.168 12 35 17.832 35 25 C 35 32.168 29.168 38 22 38 C 14.832 38 9 32.168 9 25 C 9 17.832 14.832 12 22 12 z M 22 14 C 15.935 14 11 18.935 11 25 C 11 27.814 12.071406 30.377219 13.816406 32.324219 C 15.889406 30.225219 18.852 29 22 29 C 25.14 29 28.1135 30.222312 30.1875 32.320312 C 31.9295 30.373313 33 27.812 33 25 C 33 18.935 28.065 14 22 14 z M 40 16 L 40 24 L 46 24 L 46 16 L 40 16 z M 22 18.5 C 24.481 18.5 26.5 20.519 26.5 23 C 26.5 25.481 24.481 27.5 22 27.5 C 19.519 27.5 17.5 25.481 17.5 23 C 17.5 20.519 19.519 18.5 22 18.5 z M 40 26 L 40 34 L 46 34 L 46 26 L 40 26 z M 40 36 L 40 45.474609 C 43.49 44.235609 46 40.91 46 37 L 46 36 L 40 36 z"></path>
        </svg>
        <Link to={"/Contact"} className="flex items-center font-semibold text-white">
          Contact
        </Link>
      </Typography>
    </ul>
    </div>
  );

  return (
    <Navbar className="fixed z-50 w-full  mt-1 mx-5 px-4 py-2 lg:px-8 lg:py-4 border-blue-200 bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="font-bold mr-4 cursor-pointer py-1.5 text-xl"
        >
          Ganesh Kusumbe
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}
