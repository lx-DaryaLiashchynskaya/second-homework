import React, { useEffect, useState } from 'react';
import './App.css';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
      <div className="container">
        <h1 className="title">User Management</h1>
        <div className="tableWrapper">
          <table className="table">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                  <td className="clickable" onClick={() => setSelectedUser(user)}>
                    {user.name}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.address.street}, {user.address.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                  <td>
                    <button className="deleteButton" onClick={() => handleDelete(user.id)}>X</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {selectedUser && (
            <div className="modalOverlay" onClick={() => setSelectedUser(null)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedUser.name} ({selectedUser.username})</h2>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Website:</strong> {selectedUser.website}</p>
                <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city}, {selectedUser.address.zipcode}</p>
                <p><strong>Company:</strong> {selectedUser.company.name} - {selectedUser.company.catchPhrase}</p>
                <p>
                  <a
                      href={`https://www.google.com/maps?q=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </p>
                <button className="closeButton" onClick={() => setSelectedUser(null)}>Close</button>
              </div>
            </div>
        )}
      </div>
  );
};

export default App;
