import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';


function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };


  return (
    <div>
      <h1>Online Exam</h1>
      <StudentForm addStudent={addStudent}/>
     <StudentList  students={students}/>
    </div>
  );
}

export default App;
