import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap'; // Import React Bootstrap components

import uefaLogo from '../../images/uefa.png';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import conferenceLogo from "../../images/conference2.png";

function CustomNavbar() {
    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavCollapse = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <div className="container">
                <Navbar.Brand  onClick={() => navigate("/")}>
                    <img className='uefa-logo' src={uefaLogo} alt="Your Logo" />
                </Navbar.Brand>
                <Navbar.Toggle onClick={handleNavCollapse} aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav" className={`justify-content-end ${expanded ? 'show' : ''}`}>
                    <Nav className="mr-auto">
                        <Nav.Link className='navl-ink cl' onClick={() => navigate("/europe?league=cl")}>{t('CL')}</Nav.Link>
                        <Nav.Link className='navl-ink el' onClick={() => navigate("/europe?league=el")}>{t('EL')}</Nav.Link>
                        <Nav.Link className='navl-ink ecl' onClick={() => navigate("/europe?league=ecl")}>{t('ECL')}</Nav.Link>
                    </Nav>
                    <LanguageSelector />
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default CustomNavbar;
