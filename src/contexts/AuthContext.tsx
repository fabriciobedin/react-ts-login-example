import React, { createContext, useCallback } from 'react';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    console.log(email, password);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Fabricio', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
