import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Header.css"; //

const Header = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="leftNav">
          <Button color="inherit" onClick={() => navigate('/')}>LBREP</Button>
        </div>

        <div className="midNav">
          <Button color="inherit" onClick={() => navigate('/listings')}>Listings</Button>
          <Button color="inherit" onClick={() => navigate('/agencies')}>Agencies</Button>
        </div>

        <div className="rightNav">
          <Button color="inherit" onClick={() => navigate('/add-property')}>Add Property</Button>
          <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
