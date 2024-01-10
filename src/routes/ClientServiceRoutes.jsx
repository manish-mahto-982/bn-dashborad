import React from "react";
import InductionFlow from "src/screens/client-service/dashboard/InductionFlow";
import Layout from "src/screens/layout";

const ClientServiceRoutes = {
  path: "/cs",
  element: <Layout />,
  children: [
    {
      path: "dashboard",
      children: [
        { path: "", element: <InductionFlow /> },
        {
          path: "induction-flow",
          element: <InductionFlow />,
        },
      ],
    },
  ],
};

export default ClientServiceRoutes;
