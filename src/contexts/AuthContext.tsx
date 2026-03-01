import { createContext, type ReactNode } from "react";
import { useState, useEffect } from "react";
import { api } from "../services/api";

// shape of the authentication context data that will be shared
type AuthContext = {
  isLoading: boolean; // whether the provider is still loading stored session
  session: null | UserAPIResponse; // the current session or null if not logged in
  save: (data: UserAPIResponse) => void; // function to save a new session (login)
  remove: () => void; // function to clear session (logout)
};

const LOCAL_STORAGE_KEY = "@refund"; // prefix used when writing to localStorage

export const AuthContext = createContext({} as AuthContext); // create an empty context object

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null); // session state
  const [isLoading, setIsLoading] = useState(true); // loading flag

  function save(data: UserAPIResponse) {
    // store user and token in browser storage
    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:user`,
      JSON.stringify(data.user),
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

    // ensure axios sends the token on future requests
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    setSession(data); // update React state with new session
  }

  function loadUser() {
    const user = localStorage.getItem(`${LOCAL_STORAGE_KEY}:user`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);

    if (token && user) {
      // if both exist, restore session
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setSession({
        token,
        user: JSON.parse(user),
      });
    }

    setIsLoading(false); // finished loading regardless
  }

  function remove() {
    setSession(null); // clear in-memory session
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:user`);

    window.location.assign("/"); // redirect to homepage
  }

  useEffect(() => {
    loadUser(); // run once on mount to restore any saved session
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, isLoading, remove }}>
      {children} {/* render children inside provider */}
    </AuthContext.Provider>
  );
}
