import React, { useState } from 'react';
import './styles.css';
function StudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    // Create a new student object
    const newStudent = {
      id: Date.now(),
      name,
      age,
      email,
      address,
      };

    // Call the addStudent function passed from the App component
    addStudent(newStudent);

    // Clear the form after submission
    setName('');
    setAge('');
    setEmail('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}


export default StudentForm;
