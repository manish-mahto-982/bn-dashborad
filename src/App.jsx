import { useMemo, useState } from "react";
import "./App.css";
import { CssBaseline, StyledEngineProvider, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import NavigationScroll from "./components/common/NavigationScroll";
import Routes from "./routes";

function App() {
  const {themeMode } = useSelector((state) => state.global);
  const theme = useMemo(() => createTheme(themeSettings(themeMode)), [themeMode]);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
