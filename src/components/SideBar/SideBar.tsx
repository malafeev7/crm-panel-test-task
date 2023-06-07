import { useState } from 'react';
import './SideBar.style.scss';
import * as Icons from 'assets/icons';
import { sideBarTexts } from 'text';
import { Link } from 'react-router-dom';

interface MenuItem {
  icon: string;
  text: string;
  link?: string;
  alt: string;
}

const menuItems: MenuItem[] = [
  {
    icon: Icons.IconHome,
    text: sideBarTexts.home,
    link: '/',
    alt: 'IconHome',
  },
  {
    icon: Icons.IconSearch,
    text: sideBarTexts.search,
    link: '/address',
    alt: 'IconSearch',
  },
  {
    icon: Icons.IconTables,
    text: sideBarTexts.tables,
    alt: 'IconTables',
  },
  {
    icon: Icons.IconCalendar,
    text: sideBarTexts.calendar,
    alt: 'IconCalendar',
  },
  {
    icon: Icons.IconMap,
    text: sideBarTexts.maps,
    alt: 'IconMap',
  },
  {
    icon: Icons.IconWidgets,
    text: sideBarTexts.widgets,
    alt: 'IconWidgets',
  },
];

const settingsMenu: MenuItem[] = [
  {
    icon: Icons.IconSettingPerson,
    text: sideBarTexts.settingPerson,
    alt: 'IconSettingPerson',
  },
  {
    icon: Icons.IconFinancial,
    text: sideBarTexts.financial,
    alt: 'IconFinancial',
  },
];

export const SideBar: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className='sidebar'>
      <p className='title'>{sideBarTexts.menu}</p>
      <ul className='menu'>
        {menuItems.map((item, index) => (
          <li key={index} className='menu-item'>
            <Link className='link' to={item.link || '#'}>
              <div>
                <img src={item.icon} alt={item.alt} />
                {item.text}
              </div>
            </Link>
          </li>
        ))}
        <li className='menu-item dropdown'>
          <div onClick={toggleSettings}>
            <img src={Icons.IconSetting} alt='IconSetting' />
            {sideBarTexts.setting}
            <img
              className={`triangle ${isSettingsOpen ? 'reverse' : ''}`}
              src={Icons.IconTriangle}
              alt='IconTriangle'
            />
          </div>
          {isSettingsOpen && (
            <ul>
              {settingsMenu.map((item, index) => (
                <li key={index}>
                  <div>
                    <img src={item.icon} alt={item.alt} />
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className='menu-item'>
          <div>
            <img src={Icons.IconExit} alt='IconExit' />
            {sideBarTexts.exit}
          </div>
        </li>
      </ul>
    </div>
  );
};
