import React from 'react';
import StudentCard from './StudentCard';

// The list now accepts 'onAddMarks' to pass it down
function StudentList({ students, onAddMarks }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <StudentCard 
          key={student.id} 
          student={student} 
          onAddMarks={onAddMarks} // Pass the function to each card
        />
      ))}
    </div>
  );
}

export default StudentList;