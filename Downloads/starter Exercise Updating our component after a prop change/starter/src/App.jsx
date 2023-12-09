import React, { useEffect, useState } from 'react';
import { UserDetail } from './UserDetail';
import UserForm from './UserForm'; // Import the UserForm component

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  const fetchUsers = async () => {
	const response = await fetch('http://localhost:3000/users');
	const friends = await response.json();
	setUsers(friends);
  };
  

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/users');
      const friends = await response.json();
      setUsers(friends);
    };
    fetchUsers();
  }, []);

  const createUser = async (user) => {
    // Send a POST request to add a new user
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const newUser = await response.json();
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } else {
      console.error('Failed to add user');
    }
  };

  return (
    <div className="App">
      <h1>React Hooks exercise starter</h1>
      {}
      <UserForm createUser={createUser} />
      <ul>
        {users.map((user) => (
          <li onClick={() => setSelectedUser(user)} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
};

export default App;
