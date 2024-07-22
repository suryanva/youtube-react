import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-72">
      <ul className="space-y-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="my-2 font-bold pt-5 ">Subscriptions</h1>
      <ul className="space-y-4">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="my-2 font-bold pt-5 ">Watch Later</h1>
      <ul className="space-y-4">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
