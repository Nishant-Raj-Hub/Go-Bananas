import React from 'react';
import UserList from './components/UserList';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">GoBananas App</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <UserList />
      </Container>
    </div>
  );
};

export default App;
