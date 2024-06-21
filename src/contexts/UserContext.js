// src/contexts/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        token: localStorage.getItem('token'),
        email: localStorage.getItem('email'),
        username: localStorage.getItem('username'),
        foto: localStorage.getItem('foto'),
    });

    useEffect(() => {
        // Update the user state if localStorage changes
        setUser({
            token: localStorage.getItem('token'),
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username'),
            foto: localStorage.getItem('foto'),
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
