import React from 'react';
import './Header.style.scss';
import { default as LogoCompany } from 'assets/img/LogoCompany.svg';
import { default as IconPerson } from 'assets/img/IconPerson.svg';
import { headerTexts } from 'text';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={LogoCompany} alt='logoCompany' />
        <p>{headerTexts.header}</p>
      </div>
      <div className='person'>
        <img src={IconPerson} alt='iconPerson' />
        <p>{headerTexts.nameUser}</p>
      </div>
    </header>
  );
};
