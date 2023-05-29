import { useContext } from 'react';
import { ContactContext } from './App';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const { user, setUser, contacts, setContacts } = useContext(ContactContext);
  const history = useNavigate();

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
    history('/');
  };

  return (
    <div className="add-contact">
      <h1>Add Your Contact</h1>
      <form onSubmit={handleForm}>
        <div className="form-div">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            required
            placeholder="Jhon Lesnar"
          />
        </div>
        <div className="form-div">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            required
            placeholder="contact@admin.com"
          />
        </div>
        <div className="form-div">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            required
            placeholder="+2126792827970"
          />
        </div>
        <div className="form-div">
          <label htmlFor="note">Note</label>
          <input
            id="note"
            type="text"
            name="note"
            onChange={handleChange}
            required
            placeholder="Enter your note"
          />
          {user?.note.length > 20 && (
            <div className="warning">Note must be less than 20 character</div>
          )}
        </div>

        <button style={{ width: '100%' }} className="btn" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};
export default AddContact;
