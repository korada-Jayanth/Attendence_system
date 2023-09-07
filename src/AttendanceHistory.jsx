import React from 'react';

function AttendanceHistory({ history }) {
  return (
    <div className="attendance-history-container">
      <h2 className="attendance-history-title">Attendance History</h2>
      <ul className="attendance-list">
        {history.map((entry, index) => (
          <li key={index} className="attendance-entry">
            {entry.date}: {entry.course.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceHistory;
