import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../store";
axios.defaults.withCredentials = true;
const Header = () => {
  const [value, setValue] = useState();
  const isLogginIn = useSelector((state) => state.islogggin);
  const dispath = useDispatch();
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/api/logout", null, {
      withCredentials: true,
    });

    if (res.status === 200) {
      return res;
    }

    return new Error("Unable to logout. Please try again");
  };
  const hanldeLogout = () => {
    sendLogoutReq().then(() => {
      dispath(authActions.logout());
    });
  };
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3">Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              textColor="inherit"
              value={value}
              indicatorColor="secondary"
              onChange={(e, val) => setValue(val)}
            >
              {!isLogginIn && (
                <>
                  <Tab LinkComponent={Link} to="/login" label="Login" />
                  <Tab LinkComponent={Link} to="/signup" label="Sigup" />
                </>
              )}

              {isLogginIn && (
                <Tab
                  onClick={hanldeLogout}
                  LinkComponent={Link}
                  to="/logout"
                  label="Logout"
                />
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
