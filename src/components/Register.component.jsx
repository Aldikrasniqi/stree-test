import React from 'react';
import back from '../assets/images/back.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import ErrorAlert from './Alerts';

function Registercomponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    password2: '',
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const { name, email, phoneNumber, password, password2 } = formData;
  const testedResult = zxcvbn(password);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    // Basic validation for required fields
    if (!name || !email || !phoneNumber || !password || !password2) {
      errors.push('Ju lutem plotesoni te gjitha fushat');
    }

    if (typeof name !== 'string' || name.trim() === '') {
      errors.push('Emri duhet te jete tekst');
    }

    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Email jo valide');
    }

    if (phoneNumber.length < 9) {
      errors.push('Numri i telefonit duhet te jete se paku 9 shifror');
    }

    if (password.length < 9) {
      errors.push('Passwordi duhet te jete se paku 9 karaktere');
    }

    if (password !== password2) {
      errors.push('Passwordat nuk perputhen');
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    setErrorMessages(['Something went wrong']);

    const storedUserData = localStorage.getItem('userData');
    let users = storedUserData ? JSON.parse(storedUserData) : [];

    const newUser = {
      name,
      email,
      phoneNumber,
      password,
    };

    users.push(newUser);
    localStorage.setItem('userData', JSON.stringify(users));

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      password2: '',
    });

    navigate('/login');
  };

  const handleInputFocus = (e) => {
    const label = e.target.previousSibling;
    label.classList.add('active');
  };

  const handleInputBlur = (e) => {
    const { value } = e.target;
    const label = e.target.previousSibling;
    if (value === '') {
      label.classList.remove('active');
    }
  };

  const handleImageClick = () => {
    navigate('/login');
  };

  const buttonColor =
    name !== '' &&
    email !== '' &&
    phoneNumber !== '' &&
    password !== '' &&
    password2 !== ''
      ? 'bg-rose-500'
      : 'bg-gray-300 shadow-lg';

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="max-w-sm">
        <section className="form mt-5">
          <Link to="/login" onClick={handleImageClick}>
            <img src={back} alt="Back" className="cursor-pointer" />
          </Link>
          <h1 className="mb-20 font-bold text-3xl pl-5 mt-3">
            Register to Stree
          </h1>
          <form onSubmit={onSubmit} className="p-5">
            <div className="relative mb-10 ">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  name !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                className="w-full py-2 border-b"
                id="name"
                name="name"
                value={name}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="relative mb-10">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  email !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Email
              </label>
              <input
                type="email"
                className="w-full py-2 border-b"
                id="email"
                name="email"
                value={email}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="relative mb-10">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  phoneNumber !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Mobile Number
              </label>
              <input
                type="number"
                className="w-full py-2 border-b"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
            <div className="relative mb-0">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  password !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Password
              </label>
              <input
                type="password"
                className="w-full py-2 border-b"
                id="password"
                name="password"
                value={password}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="relative mb-5">
              <div className="indicator mt-2">
                <span
                  className={
                    testedResult.score >= 1 ? 'bg-rose-500' : 'bg-gray-300'
                  }
                ></span>
                <span
                  className={
                    testedResult.score >= 2 ? 'bg-rose-500' : 'bg-gray-300'
                  }
                ></span>
                <span
                  className={
                    testedResult.score >= 3 ? 'bg-rose-500' : 'bg-gray-300'
                  }
                ></span>
                <span
                  className={
                    testedResult.score >= 4 ? 'bg-rose-500' : 'bg-gray-300'
                  }
                ></span>
              </div>
            </div>
            <div className="relative mt-8">
              <label
                className={`text-gray-600 absolute transition-all duration-300 ${
                  password2 !== '' ? '-translate-y-4 scale-100 ' : ''
                }`}
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full py-2 border-b"
                id="password2"
                name="password2"
                value={password2}
                placeholder=""
                onChange={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>

            <div className="flex justify-center mt-5 mb-3">
              <button
                type="submit"
                className={`w-96 h-12 rounded text-white flex items-center justify-center ${buttonColor}`}
              >
                Register
              </button>
            </div>
            <ErrorAlert messages={errorMessages} />
            <div className="flex justify-center m-5 text-center">
              <p className="text-black text-sm">
                By registering you agree to{' '}
                <span className="text-rose-500 font-semibold cursor-pointer">
                  Terms & Conditions
                </span>{' '}
                and{' '}
                <span className="text-rose-500 font-semibold cursor-pointer">
                  Privacy Policy
                </span>{' '}
                of Stree
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Registercomponent;
