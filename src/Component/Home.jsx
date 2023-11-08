import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    
  return (
    <div className='home'>
      <img src={require('../photos/sunset-1401883.jpg')} alt="" />
      <div className='text-block'>
        <h1>Welcome to the world of text Editing</h1>
        <div className='home-btn'>
            <Link className='translate-btn' to="/texteditor">Text Editer</Link>
            <Link className='translate-btn' to='/translator'>Translator</Link>
        </div>

      </div>
    </div>
  )
}
