import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import {Link} from "react-router-dom"
const Header = () => {
    const [value ,setValue] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3">Auth</Typography>
          <Box 
            sx = {{marginLeft: "auto"}}
          >
            <Tabs 
                textColor="inherit"
                value = {value}
                indicatorColor = "secondary"
                onChange={(e,val)=> setValue(val)}
            >
                <Tab LinkComponent={Link} to = "/login" label = "Login" />
                <Tab 
                LinkComponent={Link} to = "/signup"
                label = "Sigup" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
