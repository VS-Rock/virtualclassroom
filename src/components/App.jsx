import React, { useState, useEffect } from 'react';
import TeachSplashScreen from './TeachSplashScreen';
import StudSplashScreen from './StudSplashScreen';

export default function App() {
  const [view, setView] = useState('logout');
  const [data, setData] = useState(null);

  const grabData = () => new Promise((resolve) => {
    // console.log('grabData');
    const result = {
      user: 'teacher',
      id: 123,
      fullName: 'John Doe',
      idSchool: 1,
      email: 'johndone@fake.news',
      created_at: new Date(),
    };
    resolve(result);
  });

  const handleLogInClick = () => {
    // console.log('login');
    const fetchData = async () => {
      const obj = await grabData();
      setData(obj);
      setView(obj.user);
      // setTimeout(() => console.log("view", view, "data", data), 5000);
    };
    fetchData();
  };

  useEffect(() => {});

  return (
    <div>
      {view === 'logout' && (
      <button
        name="login"
        type="button"
        onClick={handleLogInClick}
      >
        login
      </button>
      )}
      <button
        name="logout"
        type="button"
        onClick={() => setView('logout')}
      >
        logout
      </button>
      <div>
        {view === 'teacher' && <TeachSplashScreen name={data.fullName} user={data.user} />}
        {view === 'student' && <StudSplashScreen name={data.fullName} user={data.user} />}
      </div>
    </div>
  );
}