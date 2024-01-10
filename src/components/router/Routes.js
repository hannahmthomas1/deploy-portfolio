import PageLayout from "../StaticElements/PageLayout";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import G20ProjectPage from "../pages/G20Project";
import YarnProjectPage from "../pages/YarnProject";
import ChristmasProjectPage from "../pages/ChristmasProject";
import MixlistProjectPage from "../pages/MixlistProject";

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
      { path: "yarn-shop-project", element: <YarnProjectPage /> },
      { path: "christmas-project", element: <ChristmasProjectPage /> },
      { path: "mixlist-project", element: <MixlistProjectPage /> },
    ],
  },
];

export default routes;
