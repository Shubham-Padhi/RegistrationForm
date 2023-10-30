import React from 'react';
import './styles.css';
function StudentList({ students }) {
  return (
    <div className='add'>
      <h2>Students list</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> (Age: {student.age}, Email: {student.email},Address:{student.address})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;


