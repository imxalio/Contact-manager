import { createContext, useEffect, useState } from 'react';
import AppRouters from '../routers/AppRouters';
import './../style/app.css';

export const ContactContext = createContext();

const App = () => {
  const localContactKey = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    note: '',
    id: 0,
  });

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(localContactKey));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(localContactKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <ContactContext.Provider
      value={{
        user,
        setUser,
        contacts,
        setContacts,
      }}
    >
      <AppRouters />
    </ContactContext.Provider>
  );
};

export default App;
