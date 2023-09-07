import React from 'react';

function CourseCard({ course, onMarkAttendance, markedCourses }) {
  const isMarked = markedCourses.includes(course);

  return (
    <div className="course-card">
      <h3 className="course-name">{course.name}</h3>
      <p className="course-description">{course.description}</p>
      {isMarked ? (
        <p className="attendance-marked">Attendance Marked</p>
      ) : (
        <button className="mark-button" onClick={() => onMarkAttendance(course)}>Mark Attendance</button>
      )}
    </div>
  );
}

export default CourseCard;
