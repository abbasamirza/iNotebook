import Notes from "../pages/Notes";
import path from "./paths";

const protectedPaths = [
  {
    path: path.notes,
    element: <Notes />,
  },
];

export default protectedPaths;
