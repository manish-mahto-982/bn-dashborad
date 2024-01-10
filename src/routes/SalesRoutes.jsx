import React from "react";
import InductionFlow from "src/screens/client-service/dashboard/InductionFlow";
import Layout from "src/screens/layout";
import AllClients from "src/screens/sales/all-clients/AllClients";
import AvailableLeads from "src/screens/sales/available-leads/AvailableLeads";
import ContentLibrary from "src/screens/sales/content-library/ContentLibrary";
import DashboardDefault from "src/screens/sales/dashboard";
import PerformanceAnalysis from "src/screens/sales/performance-analysis/PerformanceAnalysis";

const SalesRoutes = {
  path: "/sales",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      element: <DashboardDefault />,
    },
    {
      path: "all-clients",
      element: <AllClients />,
    },
    {
      path: "available-leads",
      element: <AvailableLeads />,
    },
    {
      path: "content-library",
      element: <ContentLibrary />,
    },
    {
      path: "performance-analysis",
      element: <PerformanceAnalysis />,
    },
  ],
};

export default SalesRoutes;
