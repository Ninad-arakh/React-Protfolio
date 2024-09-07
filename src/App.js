import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Body from "./components/Body";
import ProjectsPage from "./components/ProjectsPage";
import { Provider } from "react-redux";
import Store from "./Utils/Store";
import SingleProject from "./components/SingleProject";

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
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="App ">
        {/* <Header /> */}
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
