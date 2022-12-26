/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// @mui/material
import { Box } from "@mui/material";

// own components
import Loading from "../../components/Loading/Loading";

// utils
import { logoutUser } from "../../utils/auth";

const Logout = () => {
  const navigate = useNavigate();
  const [loading] = useState(true);

  useEffect(() => {
    logoutUser();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Loading
        visible={loading}
        sx={{
          zIndex: loading ? 99 : -1,
        }}
      />
    </Box>
  );
};

export default Logout;
