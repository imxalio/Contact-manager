import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link className="links" to="/">
      {' '}
      <h1 className="main-title">Contact Manager</h1>
    </Link>
  );
};
export default Header;
