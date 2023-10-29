// StudentsList.js
import React from 'react';
import { students } from '../../dummyData';

function StudentsList({ schoolId }) {
  const studentsInSchool = students.filter((student) => student.schoolId === schoolId);

  return (
    <ul>
      {studentsInSchool.map((student) => (
        <li key={student.id}>
          {student.name} (Admission No: {student.admissionNo})
        </li>
      ))}
    </ul>
  );
}

export default StudentsList;
