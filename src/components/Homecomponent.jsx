import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../Utils/userContext';

function Homecomponent() {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);
  const handleLogout = () => {
    // Remove users from local storage
    // localStorage.removeItem('userData');
    // window.location.reload();
    // Clear user data and set isLogged to false
    setUserData({
      email: '',
      password: '',
      isLogged: false,
    });
    navigate('/login');
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">You are now Home</h1>
        <p className="text-md mt-5 text-gray-500">All you can do is get out</p>
        <button
          className="w-72 mt-36 h-12 rounded bg-rose-500 text-white flex items-center justify-center"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Homecomponent;
