import Navbar from '../navbar/Navbar';
import logo from '../../assets/images/auto-logo-without-bg.png';
import logo1 from '../../assets/images/auto-logo.jpg';
import './Header.scss';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo-div">
                <img className="logo-no-background" src={logo} alt="Logo" />
            </div>
            <Navbar isMobileMenuOpen={isMobileMenuOpen} />
            <div className="app-mobilescreen">
                {isMobileMenuOpen ? (
                    <AiOutlineClose
                        color="white"
                        fontSize={40}
                        onClick={toggleMobileMenu}
                    />
                ) : (
                    <BiMenuAltRight
                        color="white"
                        fontSize={40}
                        onClick={toggleMobileMenu}
                    />
                )}
            </div>
        </header>
    );
}
export default Header;
