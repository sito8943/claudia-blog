/* eslint-disable react/function-component-definition */
// react-router-dom
import { Outlet } from "react-router-dom";

// @mui components
import { Box } from "@mui/material";

const Auth = () => (
  <Box
    sx={{
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box>
      <Outlet />
    </Box>
  </Box>
);

export default Auth;
