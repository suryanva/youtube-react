import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex justify-start ">
      <div>
        <SideBar />
      </div>
      <MainContainer />
    </div>
  );
};

export default Body;
