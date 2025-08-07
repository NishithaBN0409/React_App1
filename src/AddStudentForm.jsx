import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // 1. Add a new state to hold the marks value
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 2. Make sure all three fields are filled
    if (name && age && marks) {
      // 3. Include the marks when creating the new student object
      onAddStudent({
        name,
        age: parseInt(age),
        marks: parseInt(marks) // Add the marks here
      });
      // 4. Clear all three input fields after submission
      setName('');
      setAge('');
      setMarks('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      {/* 5. THIS IS THE NEW INPUT FIELD FOR MARKS */}
      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;