import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import uefaLogo from '../../images/uefa.png';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector/LanguageSelector';
import conferenceLogo from "../../images/conference2.png"
function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img className='uefa-logo' src={uefaLogo} alt="Your Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link cl" href="/champions-league">
                                {t('CL')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link el" href="/europe-league">{t('EL')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ecl" href="/conference-league">{t('ECL')}</a>
                        </li>

                    </ul>
                    <LanguageSelector />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;