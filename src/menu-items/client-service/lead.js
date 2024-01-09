// assets
import {TbPremiumRights } from "react-icons/tb";

// constant
const icons = {TbPremiumRights };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const lead = {
  id: "lead",
  title: "Leads",
  type: "group",
  children: [
    {
      id: "sales-work",
      title: "Sales Work",
      type: "item",
      url: "/cs/lead/sales-work",
      icon: icons.TbPremiumRights,
      breadcrumbs: false,
    },
    
  ],
};

export default lead;
