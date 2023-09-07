import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import AttendanceHistory from './AttendanceHistory';
import { coursesData } from './courses';

function App() {
  const [user, setUser] = useState(null);
  const [markedCourses, setMarkedCourses] = useState([]);
  const [attendanceHistory, setAttendanceHistory] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setUser(username);
    console.log("handleLogin clicked");
  };

  const markAttendance = (course) => {
    setMarkedCourses([...markedCourses, course]);
    setAttendanceHistory([...attendanceHistory, { course, date: new Date().toLocaleDateString() }]);
  };
  console.log(attendanceHistory);

  return (
    <div className="app">
      {!user ? (
        <div className="login-form">
        <h2>Welcome to the Attendance System</h2>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
      ) : (
        <div>
          <Dashboard courses={coursesData} onMarkAttendance={markAttendance} markedCourses={markedCourses} user={user} />
          <AttendanceHistory history={attendanceHistory} />
        </div>
      )}
    </div>
  );
}

export default App;
