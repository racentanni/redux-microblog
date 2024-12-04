import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Blogging App
        </Typography>
        <Button color="inherit" component={Link} to="/">Blog</Button>
        <Button color="inherit" component={Link} to="/new">Add a new post</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;