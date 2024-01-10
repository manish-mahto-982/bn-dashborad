import { useRoutes } from "react-router-dom";
import ClientServiceRoutes from "./ClientServiceRoutes";
import SalesRoutes from "./SalesRoutes";

const themeRoutes = () => {
  const currentPath = window.location.pathname;
  let route;
  let baseUrl = currentPath.split("/")[1];
  switch (baseUrl) {
    case "cs":
      route = [ClientServiceRoutes];
      break;
    case "sales":
      route = [SalesRoutes];
      break;
    default:
      route = [];
  }
  return useRoutes(route);
};

const Routes = themeRoutes;

export default Routes;
