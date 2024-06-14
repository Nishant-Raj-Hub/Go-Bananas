// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api';
import { TextField, List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>User List</Typography>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      <List>
        {filteredUsers.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserList;
