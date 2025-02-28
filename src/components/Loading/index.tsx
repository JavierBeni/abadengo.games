import React from 'react';
import { PikaGif } from './styles';
import pokegif from '../../assets/pikachu.gif';

const Loading: React.FC = () => {
  return (
    <div>
      <PikaGif className='pikas' src={pokegif} alt="my-gif" />
        Loading...
      <PikaGif className='pikas' src={pokegif} alt="my-gif" />
    </div>
  );
};

export default Loading;
