import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = () => {
    return (
        <div>
            <AuthContext.Provider>

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;