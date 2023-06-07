import React from 'react';
import { News } from 'components/News';
import { SideBar } from 'components/SideBar';

const HomeScreen = () => {
  return (
    <div className='container'>
      <SideBar />
      <News />
    </div>
  );
};

export default HomeScreen;
