/* eslint-disable react/function-component-definition */
// react-router-dom
import { Outlet } from "react-router-dom";

// @mui components
import { Box } from "@mui/material";

const View = () => (
  <Box
    sx={{
      minHeight: "100vh",
    }}
  >
    <Box>
      <Outlet />
    </Box>
  </Box>
);

export default View;
