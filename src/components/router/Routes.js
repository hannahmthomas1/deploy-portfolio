import PageLayout from "../StaticElements/PageLayout";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";
import G20ProjectPage from "../pages/G20Project";
import YarnProjectPage from "../pages/YarnProject";
import ChristmasProjectPage from "../pages/ChristmasProject";
import MixlistProjectPage from "../pages/MixlistProject";
import CloudManagementPage from "../pages/CloudManagement";


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
      { path: "cloud-management", element: <CloudManagementPage /> },
    ],
  },
];

export default routes;
