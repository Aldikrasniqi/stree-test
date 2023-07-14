import React from 'react';

const ErrorAlert = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <p key={index} className="text-red-500">
          {message}
        </p>
      ))}
    </div>
  );
};

export default ErrorAlert;
