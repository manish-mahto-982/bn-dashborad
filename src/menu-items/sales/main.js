// assets
import {
  TbCalendar,
  TbDashboard,
  TbUsers,
  TbBrandCodesandbox,
  TbBooks,
  TbChartDots2,
} from "react-icons/tb";

// constant
const icons = {
  TbCalendar,
  TbDashboard,
  TbUsers,
  TbBrandCodesandbox,
  TbBooks,
  TbChartDots2,
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const main = {
  id: "sales",
  title: "",
  type: "group",
  children: [
    {
      id: "sales-dashboard",
      title: "Dashboard",
      type: "item",
      url: "/sales/dashboard",
      icon: icons.TbDashboard,
      breadcrumbs: false,
    },
    {
      id: "all-client",
      title: "All Client",
      type: "item",
      url: "/sales/all-clients",
      icon: icons.TbUsers,
      breadcrumbs: false,
    },
    {
      id: "available-leads",
      title: "Available Leads",
      type: "item",
      url: "/sales/available-leads",
      icon: icons.TbBrandCodesandbox,
      breadcrumbs: false,
    },
    {
      id: "content-library",
      title: "Content Library",
      type: "item",
      url: "/sales/content-library",
      icon: icons.TbBooks,
      breadcrumbs: false,
    },
    {
      id: "performance-analysis",
      title: "Performance Analysis",
      type: "item",
      url: "/sales/performance-analysis",
      icon: icons.TbChartDots2,
      breadcrumbs: false,
    },
  ],
};

const salesMain = main;

export default salesMain;
