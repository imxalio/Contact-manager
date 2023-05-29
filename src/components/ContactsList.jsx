import { useContext } from 'react';
import { ContactContext } from './App';
import { Link } from 'react-router-dom';

const ContactsList = () => {
  const { contacts, setContacts } = useContext(ContactContext);

  const removeContact = (id) => {
    const newContacts = contacts.filter((user) => user.id !== id);
    setContacts(newContacts);
  };

  return (
    <>
      <div className="list-header">
        <h1>Contact List</h1>
        <Link to="add-contact">
          <button className="btn">Add Contact</button>
        </Link>
      </div>
      <section className="list-container">
        {contacts.map((user) => {
          const { name, email, phoneNumber, note, id } = user;
          return (
            <div key={id} className="contact-info">
              <div>
                <li>
                  <span className="material-symbols-outlined">badge</span>
                  <Link className="links" to={`/contact/${id}`}>
                    <h2>{name}</h2>
                  </Link>
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
    </>
  );
};

export default ContactsList;
