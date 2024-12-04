import React, { useState } from 'react';
import './App.css';

function App() {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
    profession: '',
    describe: '',
  });

  const [users, setUsers] = useState([]);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formInput]);
    setFormInput({
      name: '',
      email: '',
      contact: '',
      gender: '',
      profession: '',
      describe: '',
    });
  };

  return (
    <>
      <div className="login-box">
        <h2>Apni Detail Dal idhar 👇</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="text" name="name" value={formInput.name} onChange={handleFormInput} />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="email" value={formInput.email} onChange={handleFormInput} />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="contact" value={formInput.contact} onChange={handleFormInput} />
            <label>Contact</label>
          </div>
          <div className="user-box">
            <input type="text" name="gender" value={formInput.gender} onChange={handleFormInput} />
            <label>Gender</label>
          </div>
          <div className="user-box">
            <input type="text" name="profession" value={formInput.profession} onChange={handleFormInput} />
            <label>Profession</label>
          </div>
          <div className="user-box">
            <input type="text" name="describe" value={formInput.describe} onChange={handleFormInput} />
            <label>Describe</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    

      {users.length > 0 ? (
        <div className="ag-format-container col-12">
          <div className="ag-courses_box">
            {users.map((user, index) => (
              <div key={index} className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    {user.name}
                  </div>
                  <div className="ag-courses-item_date-box">
                    <p>profession: {user.profession}</p>
                    <p>Email: {user.email}</p>
                    <p>Roll: {user.gender}</p>
                    <p>Contact: {user.contact}</p>
                    <p>Result: {user.describe}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No users yet.</p>
      )}
    </>
  );
}

export default App;
