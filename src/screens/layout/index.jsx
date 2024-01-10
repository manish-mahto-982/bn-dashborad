import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBar from "src/components/common/SideBar";
import Navbar from "src/components/common/Navbar";
import config from "src/config";
function Layout() {
  const theme = useTheme();
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
        drawerWidth="300px"
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
          <Box>
            <Navbar
              user={{}}
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          </Box>
        </>
        <Box
          width={"calc(100% - 40px)"}
          height={'100%'}
          // height={"calc(100% - 20px)"}
          // mt={'20px'}
          mx={"auto"}
          overflow={'scroll'}
          sx={{ borderRadius: config.borderRadius / 3 }}
          bgcolor={theme.palette.background.alt}
          pl={4}
          pt={3}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
