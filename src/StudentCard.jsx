import React from 'react';

// The card now receives 'onAddMarks' function as a prop
function StudentCard({ student, onAddMarks }) {
  
  // Define the passing mark
  const PASSING_MARK = 40;

  // Function to determine the status
  const getStatus = () => {
    if (student.marks === null || student.marks === undefined) {
      return 'Awaiting Marks';
    }
    return student.marks >= PASSING_MARK ? 'Pass' : 'Fail';
  };

  // Handler for the button click
  const handleAddMarksClick = () => {
    const newMarks = prompt(`Enter marks for ${student.name}:`, student.marks || '');
    
    // Check if the user entered a value and didn't cancel
    if (newMarks !== null) {
      const marksAsNumber = parseInt(newMarks, 10);
      // Check if the entered value is a valid number
      if (!isNaN(marksAsNumber)) {
        onAddMarks(student.id, marksAsNumber);
      } else {
        alert('Please enter a valid number for marks.');
      }
    }
  };

  const status = getStatus();

  return (
    <div style={{ 
        border: `2px solid ${status === 'Pass' ? 'green' : (status === 'Fail' ? 'red' : '#ccc')}`, 
        margin: '10px', 
        padding: '10px',
        borderRadius: '8px'
    }}>
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      {/* Display marks if they exist */}
      <p>Marks: {student.marks !== null ? student.marks : 'N/A'}</p>
      {/* Display the calculated status */}
      <p>Status: <strong>{status}</strong></p>
      {/* Button to trigger the prompt for adding/editing marks */}
      <button onClick={handleAddMarksClick}>Add/Edit Marks</button>
    </div>
  );
}

export default StudentCard;