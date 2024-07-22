import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex justify-start ">
      <div>
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
