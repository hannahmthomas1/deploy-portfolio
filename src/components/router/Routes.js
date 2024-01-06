import PageLayout from "../StaticElements/PageLayout";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import G20ProjectPage from "../pages/G20Project";

// const routes = [
//   { path: "/", element: <HomePage /> },
//   { path: "/about", element: <AboutPage /> },
// ];

const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "g20project", element: <G20ProjectPage /> },
    ],
  },
];

export default routes;
