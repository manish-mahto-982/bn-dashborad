// assets
import {TbMailOpened,TbFileInvoice} from "react-icons/tb";

// constant
const icons = { TbMailOpened,TbFileInvoice};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const quickAccess = {
  id: "quick-access",
  title: "Quick Access",
  type: "group",
  children: [
    {
      id: "drafts",
      title: "Drafts",
      type: "item",
      url: "/cs/quick-access/drafts",
      icon: icons.TbMailOpened,
      breadcrumbs: false,
    },
    {
      id: "documentation",
      title: "Documentation",
      type: "item",
      url: "/cs/quick-access/documentation",
      icon: icons.TbFileInvoice,
      breadcrumbs: false,
    },
  ],
};

export default quickAccess;
