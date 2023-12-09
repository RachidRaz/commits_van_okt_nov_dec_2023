import React, { useEffect, useState } from "react";
import { UserDetail } from "./UserDetail";
import { UserForm } from "./UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const friends = await response.json();
        setUsers(friends);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const createUser = async (user) => {
    try {
      // No error handling, normally you would do that.
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      });
      user.id = (await response.json()).id;
      setUsers(users.concat(user));
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="App">
      <h1>React Hooks exercise starter</h1>
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

