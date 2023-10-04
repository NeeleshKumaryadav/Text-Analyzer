import React from 'react';
import {useNavigate} from 'react-router-dom';
import LanguageTranslater from './LanguageTranslater';
import TextForm from './TextForm';
import { Link } from 'react-router-dom';

export default function Home() {
    const navigate=useNavigate();
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
