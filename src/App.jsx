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
import Auth from "./layouts/Auth";
import View from "./layouts/View";

// views
import Home from "./views/Home";
import Login from "./views/Auth/Login";
import Logout from "./views/Auth/Logout";
import Register from "./views/Auth/Register";
import NotFound from "./views/NotFound/NotFound";

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
            <Route exact path="/auth/" element={<Auth />}>
              <Route index element={<Login />} />
              <Route exact path="/auth/register-user" element={<Register />} />
              <Route exact path="/auth/logout" element={<Logout />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
