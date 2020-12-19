import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux';

import People from '../thunderDome/people.js';


function ThunderDome() {

  
  return (
    <>
    <h1> Thunder Dome</h1>
    <People />
    </>
  )
}

export default ThunderDome;