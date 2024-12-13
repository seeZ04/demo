import './header.css';
import logo from '@assets/logo.svg';

const Header = () => (
    <header className="header">
        <img src={logo} alt="TNEX Logo" className="logo" />
    </header>
);

export default Header;
