import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

// import {changeCategory} from '../../store/categories.js'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function People() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const peopleList = useSelector(state => state.people.peopleList);

  return (

    <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        
      {peopleList.map(people => {
        return (

        <Button key={Math.random()}>{people.name}</Button>
        )
      })};
        

      </ButtonGroup>
        
    </div>
  );
  }