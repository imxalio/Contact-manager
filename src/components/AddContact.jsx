import { useContext } from 'react';
import { ContactContext } from './ContactContainer';

const AddContact = () => {
  const { handleChange, handleForm, formRef } = useContext(ContactContext);

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
            ref={formRef}
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
        </div>
        <button style={{ width: '100%' }} className="btn" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};
export default AddContact;
