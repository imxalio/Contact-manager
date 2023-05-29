import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './../components/Header';
import AddContactForm from './../components/AddContactForm';
import ContactsList from './../components/ContactsList';

const AppRouters = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/add-contact" element={<AddContactForm />} />
        <Route exact path="/" element={<ContactsList />} />
      </Routes>
    </Router>
  );
};
export default AppRouters;
