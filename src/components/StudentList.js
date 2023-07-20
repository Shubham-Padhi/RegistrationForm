import React from 'react';
import './styles.css';
function StudentList({ students }) {
  return (
    <div>
      <h2>Admitted Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> (Age: {student.age}, Email: {student.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;


