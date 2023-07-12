import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { redirect, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import ErrorAlert from '../components/Alerts';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // const [errors, setErrors] = useState([]);
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const Navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const verifyUser = (email, password) => {
      const users = localStorage.getItem('userData');
      const parseUsers = JSON.parse(users);
      console.log(parseUsers);
      const user = parseUsers.find((user) => user.email === email);
      console.log(user);
      if (user === undefined) {
        console.log('Ky perdorues nuk ekziston');
      }
      if (!user) {
        console.log('Ky perdorues nuk ekziston');
      }
      if (!email && !password) {
        console.log('Ju lutem plotesoni te gjitha fushat');
      }
      if (user.email !== email) {
        console.log('Emaili nuk ekziston');
      }
      if (user.password !== password) {
        console.log('Passwordi nuk eshte i sakte');
      }
      if (user.email === email && user.password === password) {
        console.log('Ju u loguat me sukses');
        Navigate('/');
      }
    };

    verifyUser(email, password);
  };

  const handleInputFocus = (e) => {
    // console.log(label);
    const label = e.target.previousSibling;
    label.classList.add('active');
  };

  const handleInputBlur = (e) => {
    const { value } = e.target;
    // console.log(value);
    const label = e.target.previousSibling;
    if (value === '') {
      label.classList.remove('active');
    }
  };

  const buttonColor =
    email !== '' || password !== '' ? 'bg-rose-500' : 'bg-gray-300 shadow-lg';

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* <ErrorAlert messages={errors} /> */}
      <div className="max-w-sm">
        <Header />
        <section className="form mt-28 m-3">
          <form onSubmit={onSubmit}>
            <div className="relative mb-5">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  email !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Email ID
              </label>
              <input
                type="email"
                className="w-full py-1.5 border-b"
                id="email"
                name="email"
                value={email}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="relative">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  password !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Password
              </label>
              <input
                type="password"
                className="w-full py-1.5 border-b"
                id="password"
                name="password"
                value={password}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="flex justify-end text-rose-500 text-right p-5 w-full font-semibold">
              <span className="cursor-pointer">Forget Password? </span>
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
              <Link
                to="/register"
                className="text-rose-500 font-semibold cursor-pointer"
              >
                Register now
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
