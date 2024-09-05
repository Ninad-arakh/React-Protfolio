import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../Utils/projectsSlice";
import { useEffect } from "react";

const useProject = () => {
  const dispatch = useDispatch();
  const projectStore = useSelector((store) => store.projects);

  const Project = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/Ninad-arakh/React-Pr/master/Main.json"
    );
    const json = await data.json();
      dispatch(addProject(json));
  };

  useEffect(() => {
    Project();
  }, []);
};

export default useProject;
