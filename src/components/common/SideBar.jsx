import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  Image,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import profileImage from "src/assets/react.svg";
import FlexBetween from "./FlexBetween";
import menuItems from "src/menu-items";
import MenuList from "../menu-list/MenuList";

import bnLogo from "/bn.svg";
import { useSelector } from "react-redux";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const SideBar = ({
  user,
  drawerWidth,
  isNonMobile,
  isSideBarOpen,
  setIsSideBarOpen,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const globalState = useSelector((state) => state.global);
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    isSideBarOpen && (
      <Box
        minWidth={"250px"}
        component="nav"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.primary[600]
              : theme.palette.common.white,
          // borderRight:
          //   !isNonMobile && isSideBarOpen ? `2px solid #ffffff20` : "none",
          zIndex: 10,
          height: "100%",
          overflowY: "hidden",
          position: "relative",
        }}
      >
        <Box
          py={"1rem"}
          px={"1rem"}
          sx={{
            zIndex: 10,
            left: 0,
            width: "250px",
          }}
        >
          <FlexBetween color={theme.palette.secondary.main} height={"37px"}>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <svg
                width="30"
                height="30"
                viewBox="0 0 102 112"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 1000001835">
                  <g id="Group 33998">
                    <path
                      id="Path 5"
                      d="M44.8413 68.228C44.558 68.586 44.4088 68.9921 44.4087 69.4054L44.4336 89.9043C44.4336 89.9043 44.4336 91.7027 46.9007 91.7027H58.414C60.8811 91.7027 60.8811 89.9043 60.8811 89.9043V55.687C60.8807 55.1348 60.8807 55.1348 61.2164 55.687L85.5524 89.9043C86.3748 91.1033 86.786 91.7027 88.0195 91.7027H99.5327C99.5327 91.7027 102 91.7027 102 89.9044V33.5538C102 33.5538 102 31.7554 99.5327 31.7554L88.0195 31.7555C88.0195 31.7555 85.5523 31.7555 85.5523 33.5539V67.0381C85.5523 67.0381 85.552 68.9227 83.9073 67.1243L68.4953 45.5619C68.2258 45.1885 67.8237 44.8745 67.3311 44.6529C66.8385 44.4313 66.2733 44.3101 65.6945 44.302C65.1157 44.2938 64.5445 44.3991 64.0405 44.6066C63.5365 44.8142 63.1182 45.1166 62.8291 45.4822L44.8413 68.228Z"
                      fill={
                        globalState.themeMode === "dark" ? "#fff" : "#03989F"
                      }
                    />
                    <path
                      id="Path 2"
                      d="M37.5785 78.962L2.46724 79.1214C2.46724 79.1214 -7.18814e-10 79.1214 0 77.323L0.000105198 20.9725C0.000105198 19.1741 2.46724 19.1741 2.46724 19.1741H39.4741C39.4741 19.1741 53.4594 19.1741 53.4594 29.3622V40.1556C53.4594 40.1556 53.4594 49.1478 41.1188 49.1478C41.1188 49.1478 53.4594 49.1478 53.4545 58.1399L37.5785 78.962Z"
                      fill={
                        globalState.themeMode === "dark" ? "#fff" : "#03989F"
                      }
                    />
                    <path
                      id="Rectangle 5068"
                      d="M15.6267 28.7551H31.029C34.7856 28.7551 37.8309 31.8004 37.8309 35.557V36.9401C37.8309 40.6966 34.7856 43.742 31.029 43.742H15.6267V28.7551Z"
                      fill={
                        globalState.themeMode === "dark" ? "#03989F" : "white"
                      }
                    />
                    <path
                      id="Rectangle 5072"
                      d="M15.6267 54.5344H31.029C34.7856 54.5344 37.8309 57.5797 37.8309 61.3363V62.7194C37.8309 66.4759 34.7856 69.5213 31.029 69.5213H15.6267V54.5344Z"
                      fill={
                        globalState.themeMode === "dark" ? "#03989F" : "white"
                      }
                    />
                    <g id="Group 2521">
                      <path
                        id="path3703"
                        d="M49.1333 0C125.919 43.0096 -0.919922 72.2596 53.1853 111.488C-13.0406 67.6709 106.685 44.1339 49.1333 0Z"
                        fill="#FFDC00"
                      />
                    </g>
                  </g>
                </g>
              </svg>

              <Typography variant="h4" fontWeight="bold">
                Balance Nutrition
              </Typography>
            </Box>
            {!isNonMobile && (
              <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                <ChevronLeft />
              </IconButton>
            )}
          </FlexBetween>
        </Box>

        <Drawer
          open={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth + 40,
            height: `calc(100dvh - 170px)`,
            overflowY: "auto",
            pl: 2,
            overflowX: "hidden",
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor:
                theme.palette.mode === "dark"
                  ? theme.palette.primary[600]
                  : theme.palette.common.white,
              // boxSizing: "border-box",
              // borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth + 40,
              "&::-webkit-scrollbar": {
                width: "5px",
                backgroundColor: "transparent",
              },

              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                transition: 'linear',
                transitionDuration: '500ms',
                backgroundColor:'transparent'
              },
              "&:hover::-webkit-scrollbar-thumb": {
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,.3)"
                    : "rgba(0,0,0,.1)",
                borderRadius: 2,
                // outline: "1px solid slategrey",
              },
              position: "relative",
              border: "none",
              height: "100%",
            },
          }}
        >
          <Box width="100%" marginTop={"-8px"}>
            <List>
              {/* {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })} */}
              <MenuList />
            </List>
          </Box>
        </Drawer>
        <Box
          sx={{
            height: "5rem",
            position: "absolute",
            bottom: 0,
            width: "250px",
            left: 0,
            zIndex: 50,
          }}
        >
          <Divider />
          <FlexBetween textTransform="none" gap="1rem" m="1rem 2rem 1rem 3rem">
            <Box
              component="img"
              alt="profile"
              src={profileImage}
              height="40px"
              width="40px"
              p={0.8}
              borderRadius="50%"
              sx={{ objectFit: "contain", border: `1px solid #00000020` }}
            />
            <Box textAlign="left">
              <Typography
                fontWeight="bold"
                fontSize="0.9rem"
                sx={{ color: theme.palette.secondary[100] }}
              >
                {user.name}
              </Typography>
              <Typography
                fontSize="0.8rem"
                sx={{ color: theme.palette.secondary[200] }}
              >
                {user.occupation}
              </Typography>
            </Box>
            <SettingsOutlined
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "25px ",
              }}
            />
          </FlexBetween>
        </Box>
      </Box>
    )
  );
};

export default SideBar;
