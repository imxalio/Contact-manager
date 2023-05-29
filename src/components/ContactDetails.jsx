import { useContext } from 'react';
import { ContactContext } from './App';
import { useParams } from 'react-router-dom';
import userImg from './../assets/imgs/userImg.jpeg';

const ContactDetails = (props) => {
  const { contacts } = useContext(ContactContext);
  const value = useParams();

  const findUser = contacts.find((user) => user.id == value.id);
  //   const { name, email, phoneNumber, note } = findUser;

  return (
    <div>
      {findUser ? (
        <article className="contact-details">
          <div className="contact-img">
            <img src={userImg}></img>
          </div>
          <li>
            <h2>Name:</h2> <h1>{findUser.name}</h1>
          </li>
          <li>
            <h2>Email:</h2> <h1>{findUser.email}</h1>
          </li>
          <li>
            <h2>Phone Number:</h2> <h1>{findUser.phoneNumber}</h1>
          </li>
          <li>
            <h2>Note:</h2> <h1>{findUser.note}</h1>
          </li>
        </article>
      ) : (
        <h1 className="error">Error 404, User Not Found</h1>
      )}
    </div>
  );
};

export default ContactDetails;
