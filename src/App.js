import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Body from "./components/Body";
import ProjectsPage from "./components/ProjectsPage";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import SingleProject from "./components/SingleProject";
import Footer from "./components/Footer";
import YtVideoDemo from "./components/YtVideoDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
  {
    path: "singleProject",
    element : <SingleProject />
  },
  {
    path: "projects",
    element: <ProjectsPage />,
  },
  {
    path: "demoVideo",
    element: <YtVideoDemo />
  }
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="App w-[100%]">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
