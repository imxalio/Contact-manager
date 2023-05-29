import { useContext } from 'react';
import { ContactContext } from './ContactContainer';

const ContactsList = () => {
  const { contacts, setContacts } = useContext(ContactContext);

  const removeContact = (id) => {
    const newContacts = contacts.filter((user) => user.id !== id);
    setContacts(newContacts);
  };

  return (
    <section className="list-container">
      {contacts.map((user) => {
        const { name, email, phoneNumber, note, id } = user;
        return (
          <div key={id} className="contact-info">
            <div>
              <li>
                <span className="material-symbols-outlined">badge</span>
                <h2>{name}</h2>
              </li>
              <li>
                <span className="material-symbols-outlined">mail</span>
                <p>{email}</p>
              </li>
              <li>
                <span className="material-symbols-outlined">smartphone</span>
                <p>{phoneNumber}</p>
              </li>
              <li>
                <span className="material-symbols-outlined">mail</span>
                <p>{note}</p>
              </li>
            </div>
            <button
              className="btn remove-btn"
              onClick={() => removeContact(id)}
            >
              remove contact
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactsList;
