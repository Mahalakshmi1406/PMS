import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginId === 'hema123' && password === '1234') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen fullscreen-bg">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-4xl font-semibold text-center text-gray-800">Login</h2>
        <input
          type="text"
          placeholder="Login ID"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="w-full p-2 text-white transition bg-blue-500 rounded hover:bg-blue-600">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
