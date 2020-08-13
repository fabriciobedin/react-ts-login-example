import React, { createContext, useCallback, useState, useContext } from 'react';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const user = localStorage.getItem('@upf-eventos:user');
    if (user) {
      return { user: JSON.parse(user), token: 'dfsdfsdf' };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // TODO get auth from firebase
    localStorage.setItem('@upf-eventos:user', JSON.stringify(email));
    setAuth({ user: email, token: password });
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider is requered to use useAuth');
  }
  return context;
}

export { AuthProvider, useAuth };
