import React, {
   ReactNode,
   createContext,
   useContext,
   useEffect,
   useState,
} from 'react';
import { User } from '../types/lists';
import { getItem } from '../utils/asyncStorage';

const UserContext = createContext<{ user: User | null }>({
   user: null,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
   const [user, setUser] = useState<User>(null);

   const findUser = async () => {
      const result = await getItem('user');
      if (result !== null) {
         setUser(JSON.parse(result));
      }
   };

   useEffect(() => {
      findUser();
   }, []);

   return (
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
   );
};

export const getUser = () => useContext(UserContext);

export default UserProvider;
