import React, { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';

function App() {
  // Initial state with 3 students, including a 'marks' property
  const [students, setStudents] = useState([
    { id: 1, name: 'Chikni', age: 21, marks: 75 },
    { id: 2, name: 'Chameli', age: 22, marks: 35 },
    { id: 3, name: 'Bablu', age: 23, marks: null }, // 'null' for marks not yet assigned
  ]);

  // Function to add a new student to the list
  const addStudent = (newStudent) => {
    // A more robust way to generate unique IDs
    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
    setStudents([...students, { ...newStudent, id: newId }]);
  };

  // Function to add/update marks for a specific student
  const addMarks = (studentId, newMarks) => {
    setStudents(students.map(student => {
      if (student.id === studentId) {
        // Create a new object with updated marks
        return { ...student, marks: newMarks };
      }
      // Return the original object if it's not the one we're updating
      return student;
    }));
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm onAddStudent={addStudent} />
      {/* Pass the addMarks function down to the StudentList */}
      <StudentList students={students} onAddMarks={addMarks} />
    </div>
  );
}

export default App;