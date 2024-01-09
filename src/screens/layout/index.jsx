import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "src/components/common/SideBar";
import Navbar from "src/components/common/Navbar";
function Layout() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: isNonMobile ? "flex" : "flex",
      }}
    >
      <SideBar
        user={{}}
        drawerWidth="250px"
        isNonMobile={isNonMobile}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box
        maxHeight={"100vh"}
        overflow={"hidden"}
        sx={
          isNonMobile
            ? { width: "100%" }
            : { width: "100%", position: "absolute", top: 0 }
        }
      >
        <>
          <Box width={"100%"}>
            <Navbar
              user={{}}
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          </Box>
        </>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
