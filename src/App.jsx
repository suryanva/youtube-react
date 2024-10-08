import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";

const App = () => {
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
      {/*{
      head
      body
        Sidebar
            MenuItems
        MainContainer}*/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
    ],
  },
]);

export default App;
