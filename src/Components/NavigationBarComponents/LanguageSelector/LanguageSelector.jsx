import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LanguageSelector.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import trFlag from "../../../images/flags/tr.png"
import enFlag from "../../../images/flags/en.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownButton variant="dark" id="dropdown-basic-button" title={<img className='flag-icon' src={i18n.language === "en" ? enFlag : trFlag } alt="" />}>
            <Dropdown.Item href="#/action-1" onClick={() => changeLanguage('en')}>
                <Row>
                    <Col> English</Col>
                    <Col> <img className='flag-icon' src={enFlag} alt="" /></Col>
                </Row>

            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" onClick={() => changeLanguage('tr')}>
                <Row>
                    <Col> Turkish</Col>
                    <Col> <img className='flag-icon' src={trFlag} alt="" /></Col>
                </Row>
            </Dropdown.Item>

        </DropdownButton>

    );
}

export default LanguageSelector;
