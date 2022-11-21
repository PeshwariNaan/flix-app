import { createContext, useEffect, useState } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserData,
  auth
} from '../utils/Firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log('user-context', user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const thisUser = auth.currentUser
      if(thisUser !== null){
        console.log('this user', thisUser)
        const bookmarks = thisUser.bookmarks
        const displayName = thisUser.displayName
        const yourEmail = thisUser.email
        console.log('from context this user', bookmarks, displayName, yourEmail)
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
