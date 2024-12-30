import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp, logOut } from './firebaseAuth';
import '../component/Login.css'; 

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUp(email, password);
        alert('Sign-up successful!');
      } else {
        await signIn(email, password);
        alert('Login successful!');
        onLogin(true);
        navigate('/'); 
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Decorative Header */}
        <div className="login-header">
          <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        </div>

        {/* Content Area */}
        <div className="login-content">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button
              type="submit"
              className="button button-primary"
            >
              {isSignUp ? 'Sign Up' : 'Log In'}
            </button>
          </form>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="button button-secondary"
          >
            {isSignUp ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}
          </button>
          <button
            onClick={() => {
              logOut();
              onLogin(false); 
            }}
            className="button button-logout"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
