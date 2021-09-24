import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Game Night</Link>
      <Link to="maintenance">Maintenance</Link>
    </div>
  );
};

export default Header;
