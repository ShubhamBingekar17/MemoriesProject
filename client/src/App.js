import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts.js'
import {Container , AppBar, Grid, Typography , Grow } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import addIcon from './images/add.svg';
import Modal from '@mui/material/Modal';
import useStyles from './styles';

const App = () => {
  
  const classes = useStyles();

  const [currentId , setCurrentId] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  
  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h4" style={{fontWeight: '300', borderRadius: '0'}} align="center">HEXA FAM-BOIS GALLERY</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Stack>
            <Grid item sx={12} sm={12}>
              <Posts setCurrentId={setCurrentId }/>
            </Grid>
            <img className={classes.addbtn} src={addIcon} alt='ADD' onClick={handleOpen}/>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Form style={classes.formModal} currentId={currentId} setCurrentId={setCurrentId}/>
            </Modal>
          </Stack>
        </Container>
      </Grow>
    </Container>
  )
}

export default App