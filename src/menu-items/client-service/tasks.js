// assets
import { TbCalendar, TbBriefcase,TbUser } from "react-icons/tb";

// constant
const icons = { TbCalendar, TbBriefcase,TbUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const tasks = {
  id: "task",
  title: "Task",
  type: "group",
  children: [
    {
      id: "expiry-client",
      title: "Expiry Client",
      type: "item",
      url: "/cs/task/expiry-client",
      icon: icons.TbCalendar,
      breadcrumbs: false,
    },
    {
      id: "maintenance",
      title: "Maintenance",
      type: "item",
      url: "/cs/task/maintenance",
      icon: icons.TbBriefcase,
      breadcrumbs: false,
    },
    {
      id: "oc-client",
      title: "OC Client",
      type: "item",
      url: "/cs/task/oc-client",
      icon: icons.TbUser,
      breadcrumbs: false,
    },
  ],
};

export default tasks;
