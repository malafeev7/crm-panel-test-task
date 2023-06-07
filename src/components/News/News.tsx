import React from 'react';
import './News.style.scss';
import { newsTexts, newsHeaderTexts } from 'text';

export const News: React.FC = () => {
  return (
    <div className='box'>
      <h3>{newsHeaderTexts.title}</h3>
      <h4>{newsHeaderTexts.description}</h4>
      <div className='boxContent'>
        {newsTexts.map((text, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: text }}></p>
        ))}
      </div>
    </div>
  );
};
