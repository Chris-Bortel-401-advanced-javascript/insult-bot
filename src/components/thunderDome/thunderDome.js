import React ,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import People from '../thunderDome/people.js';
import Insult from '../thunderDome/insults.js'

function ThunderDome() {

  const victim = useSelector(state => state.people.victim)
  console.log(victim)

  const insultComponent = victim ? <Insult /> : null;
  return (
    <>
    <People />
    {insultComponent}
    </>
  )
}

export default ThunderDome;