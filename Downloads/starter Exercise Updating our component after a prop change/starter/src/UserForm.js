import React, { useState } from 'react';

const UserForm = ({ createUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name, email, website };
    createUser(user);
    setName('');
    setEmail('');
    setWebsite('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Website:
        <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
