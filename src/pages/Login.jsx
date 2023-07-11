import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';

function Login() {
  console.log('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    // dispatch(login(userData));
  };

  const buttonColor =
    email !== '' || password !== '' ? 'bg-rose-500' : 'bg-gray-300 shadow-lg';

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="max-w-sm">
        <Header />
        <section className="form mt-28">
          <form onSubmit={onSubmit}>
            <div className="p-5 relative mb-5">
              <label className="text-gray-600">Email ID</label>
              <input
                type="email"
                className="w-full p-1 border-b"
                id="email"
                name="email"
                value={email}
                placeholder=""
                onChange={onChange}
              />
            </div>
            <div className="p-5 relative">
              <label className="text-gray-600">Password</label>
              <input
                type="password"
                className="w-full p-1 border-b"
                id="password"
                name="password"
                value={password}
                placeholder=""
                onChange={onChange}
              />
            </div>
            <div className="flex justify-end text-rose-500 text-right p-5 w-full font-semibold">
              <span>Forget Password? </span>
            </div>
            <div className="flex justify-center m-3">
              <button
                type="submit"
                className={`w-96 h-12 rounded text-white flex items-center justify-center ${buttonColor}`}
              >
                Login
              </button>
            </div>

            <div className="flex justify-center m-5">
              <p className="text-gray-500">Don’t have an account?</p>
              <span className="text-rose-500 font-semibold">Register now</span>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
