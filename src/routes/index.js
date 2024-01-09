import { useRoutes } from "react-router-dom";
import ClientServiceRoutes from "./ClientServiceRoutes";

const themeRoutes = () => {
  return useRoutes([ClientServiceRoutes]);
};

const Routes = themeRoutes;

export default Routes;
