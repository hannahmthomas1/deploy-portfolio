import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import { Contact } from "../Contact";

const PageLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Contact />
    </>
  );
};

export default PageLayout;
