import React, { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import './SearchAddress.style.scss';
import axios from 'axios';
import { default as IconSearchWhite } from 'assets/img/IconSearchWhite.svg';
import { searchAddressTexts } from 'text';

interface AddressSuggestion {
  value: string;
  unrestricted_value: string;
  data: any;
}

// const API_URL: string = process.env.REACT_APP_API_URL || '';
// const API_TOKEN: string = process.env.REACT_APP_API_TOKEN || '';
const API_URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const API_TOKEN = '6e692a6cfbe4c2154517b345a0a667c8918fccd4';

const COUNT_ADDRESS = 20;
const MIN_SEARCH_LENGTH = 3;

async function fetchAddresses(input: string): Promise<AddressSuggestion[]> {
  try {
    const response = await axios.post(
      API_URL,
      { query: input, count: COUNT_ADDRESS },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + API_TOKEN,
        },
      },
    );

    return response.data.suggestions;
  } catch (error) {
    console.error(error);
    throw new Error(searchAddressTexts.fetchErrorMsg);
  }
}

export const SearchAddress: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [addresses, setAddresses] = useState<AddressSuggestion[]>([]);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleClick = useCallback(
    async (event?: MouseEvent<HTMLButtonElement>): Promise<void> => {
      event?.preventDefault();

      if (input.length < MIN_SEARCH_LENGTH) {
        alert(searchAddressTexts.minLengthError);
        return;
      }

      try {
        const newAddresses = await fetchAddresses(input);
        setAddresses(newAddresses);
        setSearchPerformed(true);
      } catch (error) {
        console.error(error);
        alert(searchAddressTexts.fetchErrorMsg);
      }
    },
    [input],
  );

  const handleKeyPress = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className='searchBox'>
      <h3 className='searchBox__title'>{searchAddressTexts.title}</h3>
      <h4 className='searchBox__subTitle'>{searchAddressTexts.description}</h4>
      <div className='inputBox'>
        <input
          className='inputBox__input'
          type='text'
          placeholder={searchAddressTexts.placeholderInput}
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button className='inputBox__button' onClick={handleClick}>
          <img src={IconSearchWhite} alt='iconSearch' />
          <span>{searchAddressTexts.button}</span>
        </button>
      </div>
      {searchPerformed && addresses.length === 0 ? (
        <div className='responseBox'>
          <p className='responseBox__text'>{searchAddressTexts.addressNotFound}</p>
        </div>
      ) : (
        addresses.length > 0 && (
          <div className='responseBox'>
            <p className='responseBox__text'>{searchAddressTexts.address}</p>
            {addresses.map((address, index) => (
              <div className='responseBox__response' key={index}>
                {address.value}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
