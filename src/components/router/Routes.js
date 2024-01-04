import PageLayout from "../StaticElements/PageLayout";
import AboutPage from "../pages/About";
import HomePage from "../pages/Home";

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
    ],
  },
];

export default routes;
