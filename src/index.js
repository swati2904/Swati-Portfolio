import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import Resume from "../src/components/ResumePage/ResumePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
  document.getElementById("root")
);
