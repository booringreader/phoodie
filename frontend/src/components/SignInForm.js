import React, { useState } from 'react';

const SignInForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    onSubmit(userData); // Calling the passed onSubmit function with user data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder='Email or mobile number'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-black rounded-md px-3 mx-3 py-3"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='text-center px-3 border border-black rounded-md mx-3 my-2'
        />
      </div>
      <button type="submit" className=''>Sign In</button>
    </form>
  );
};

export default SignInForm;
