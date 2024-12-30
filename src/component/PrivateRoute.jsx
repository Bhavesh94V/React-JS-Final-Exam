import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { user } = useAuth(); // Get the user from context

    return user ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" replace />
    );
};

export default PrivateRoute;
