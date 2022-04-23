import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts.js'
import {Container , AppBar, Grid, Typography , Grow } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

const App = () => {
  
  const classes = useStyles();

  const [currentId , setCurrentId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  
  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Stack>
            <Grid item sx={12} sm={12}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
          </Stack>
        </Container>
      </Grow>
    </Container>
  )
}

export default App