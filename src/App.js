import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// @mui/material
import { CssBaseline, Box } from "@mui/material";

// theme
import { ThemeProvider } from "@mui/material/styles";
import dark from "./assets/theme/dark";
import light from "./assets/theme/light";

// components
import Notification from "./components/Notification/Notification";

// layouts
import View from "./layouts/View";

// views
import Home from "./views/Home";

// contexts
import { useMode } from "./context/ModeProvider";

// styles
import "./App.css";

function App() {
  const { modeState } = useMode();

  useEffect(() => {
    document.body.style.transition = "all 200ms ease";
  }, []);

  return (
    <ThemeProvider theme={modeState.mode === "light" ? light : dark}>
      <CssBaseline />
      <Notification />
      <Box className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<View />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
