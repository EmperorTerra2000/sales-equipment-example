import { Link } from 'react-router-dom';

import './Header.css';

import React from 'react';
import logo from '../images/logo.jpeg';

function Header() {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <>
      <header className="header page__spacing">
        <div className="header__section">
          <div className="header__left-block">
            <a href="/">
              <img className="logo" alt="логотип студсовета" src={logo} />
            </a>
            <div className="header__name">
              <h1 className="header__title">Engineering intelligence Team</h1>
              {/* <p className="header__subtitle"></p> */}
            </div>
          </div>
          <div className="header__right-block">
            <a href="tel:+74996423631" className="header__phone">
              +7(499) 642-36-31
            </a>
            <span className="header__span">Звонок по России бесплатный</span>
          </div>
        </div>
        <div className="header__nav page__spacing">
          <ul className="header__nav-links">
            <li className="header__nav-link">
              <a className="header__link" href="/#about">
                Компания
              </a>
            </li>
            <li className="header__nav-link">
              <a className="header__link" href="/#communities">
                <Link to="/catalog" style={linkStyle}>
                  Каталог оборудования
                </Link>
              </a>
            </li>
            <li className="header__nav-link">
              <a className="header__link" href="/#events">
                Производители
              </a>
            </li>
            <li className="header__nav-link">
              <a className="header__link" href="/#departures">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
