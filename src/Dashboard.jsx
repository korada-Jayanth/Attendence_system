import React from 'react';
import CourseCard from './CourseCard';

function Dashboard({ courses, onMarkAttendance, markedCourses, user }) {
  return (
    <div className="dashboard">
      <h1 className="welcome-message">Welcome, {user}!</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} onMarkAttendance={onMarkAttendance} markedCourses={markedCourses} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
