import React from 'react';
import {useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// TODO: find a way to reference the images and show corresponding name 
// TODO: Call the select victim and the insult them action differently
import john from '../../img/john.png'
import chris from '../../img/chris.png'
import brendon from '../../img/brendon.png'


// import {changeCategory} from '../../store/categories.js'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Products() {
  const classes = useStyles();

  const victim = useSelector(state => state.people.victim)
  console.log(victim, 'insults.js')
  // const john = require(victim.imageURL)
  const insultList = useSelector(state => state.insults.insults)
console.log(insultList)

let randomInsult = insultList[Math.floor(Math.random() * insultList.length)];
  return (
  <>

  <Container maxWidth="md" component="main">
  <Grid container spacing={5} alignItems="stretch">


      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component='img'
            image={victim.imageURL}
        
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {victim.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
        {randomInsult}
            </Typography>
          </CardContent>
        </CardActionArea>
        
        </Card>
      </Grid>
    


  </Grid>
  </Container>
  </>
  
  );
}

export default Products;

  


  




