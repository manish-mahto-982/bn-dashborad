// assets
import { TbDashboard } from "react-icons/tb";

// constant
const icons = { TbDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

// const dashboard = {
//   id: "dashboard",
//   title: "Dashboard",
//   type: "group",
//   children: [
//     {
//       id: "default",
//       title: "Dashboard",
//       type: "item",
//       url: "/cs/dashboard/default",
//       icon: icons.TbDashboard,
//       breadcrumbs: false,
//     },
    
//   ],
// };

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  // caption: 'Pages Caption',
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "collapse",
      icon: icons.TbDashboard,
      children: [
        {
          id: "quick-summary",
          title: "Quick Summary",
          type: "item",
          url: "/cs/dashboard/quick-summary",
          breadcrumbs: false,
        },
        {
          id: "induction-flow",
          title: "Induction Flow",
          type: "item",
          url: "/cs/dashboard/induction-flow",
          breadcrumbs: false,
        },
        {
          id: "overall-pending",
          title: "Overall Pending",
          type: "item",
          url: "/cs/dashboard/overall-pending",
          breadcrumbs: false,
        },
        {
          id: "halftime-journey",
          title: "Halftime Journey",
          type: "item",
          url: "/cs/dashboard/halftime-journey",
          breadcrumbs: false,
        },
        {
          id: "tail-end-journey",
          title: "Tail End Journey",
          type: "item",
          url: "/cs/dashboard/tail-end-journey",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

 const csDashboard=dashboard;

 export default csDashboard