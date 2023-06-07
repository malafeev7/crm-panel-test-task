import { SearchAddress } from 'components/SearchAddress';
import { SideBar } from 'components/SideBar';
import React from 'react';

const AddressScreen = () => {
  return (
    <div className='container'>
      <SideBar />
      <SearchAddress />
    </div>
  );
};

export default AddressScreen;
