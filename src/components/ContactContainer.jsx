import { createContext, useEffect, useRef, useState } from 'react';
import AddContact from './AddContact';
import ContactsList from './ContactsList';

export const ContactContext = createContext();

const ContactContainer = () => {
  const localContactKey = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    note: '',
    id: 0,
  });
  const formRef = useRef(null);

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(localContactKey));
    if (retriveContacts) setContacts(retriveContacts);
    formRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem(localContactKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      id: contacts.length + 1,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    setUser(newUser);
    if (user.note.length > 20) {
      alert('Note must have 20 character only ');
      return;
    }
    setContacts((prevContact) => [...prevContact, user]);
    e.currentTarget.reset();
  };

  return (
    <ContactContext.Provider
      value={{ user, contacts, setContacts, handleChange, handleForm, formRef }}
    >
      <AddContact />
      <ContactsList />
    </ContactContext.Provider>
  );
};

export default ContactContainer;
