import React from "react";

function MarkAttendance({ students, attendance, setAttendance }) {
  const handleMarkAttendance = (studentId) => {
    const today = new Date().toISOString().split("T")[0];
    setAttendance([
      ...attendance,
      { id: Date.now(), studentId, date: today },
    ]);
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      {students?.map((student) => (
        <div key={student.id}>
          <span>{student.name} ({student.gender})</span>
          <button onClick={() => handleMarkAttendance(student.id)}>Present</button>
        </div>
      ))}
    </div>
  );
}

export default MarkAttendance;
