// import logo from "./logo.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
// import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import routes from "./components/router/Routes";
const router = createBrowserRouter(routes, { basename: "/" });
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
