import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove users from local storage
    // localStorage.removeItem('userData');
    // window.location.reload();
    navigate('/login');
  };

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">You are now Home</h1>
          <p className="text-md mt-5 text-gray-500">
            All you can do is get out
          </p>
          <button
            className="w-72 mt-36 h-12 rounded bg-rose-500 text-white flex items-center justify-center"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
