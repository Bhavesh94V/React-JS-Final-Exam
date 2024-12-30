import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './component/MovieDetails';
import Movielist from './component/MovieList';
import Moviesearch from './component/MovieSearch';
import Navbar from './component/Navbar';
import Login from './component/Login';
import ProtectedRoute from './component/Redux/ProtectedRoute';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login status check (update as per your Firebase auth logic)
  const handleLoginStatus = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLoginStatus} />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movielist"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Movielist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/moviesearch"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Moviesearch />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
