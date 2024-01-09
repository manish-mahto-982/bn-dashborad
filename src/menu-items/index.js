// ==============================|| MENU ITEMS ||============================== //

import csDashboard from "./client-service/dashboard";
import lead from "./client-service/lead";
import quickAccess from "./client-service/quickAccess";
import tasks from "./client-service/tasks";
import salesMain from "./sales/main";

const currentPath = window.location.pathname;

let menuItems={items:[]};
if (currentPath.split("/")[1].includes("cs")) {
  menuItems = {
    items: [csDashboard, tasks, quickAccess, lead],
  };
} else if (currentPath.split("/")[1].includes("sales")) {
  menuItems = {
    items: [salesMain],
  };
}

export default menuItems;
