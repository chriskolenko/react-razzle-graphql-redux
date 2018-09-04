import HomePage from "../views/Static/Home.js";
import AboutUsPage from "../views/Static/About.js";
import ContentPage from "../views/Static/Content.js";
import NotFound from "../views/Errors/NotFound.js";

const homeRoutes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/content/about-us", component: AboutUsPage, exact: true },
  { path: "/:id/:sub?", component: ContentPage, exact: true },
  { component: NotFound },
];

export default homeRoutes;
