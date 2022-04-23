import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 0,
    border: 'none',
    margin: '50px 0',
    padding: '15px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#17181C'
  },
  heading: {
    color: '#fff',
  },
  image: {
    marginLeft: '15px',
  },
  addbtn: {
    width: '70px',
    height: '70px',
    backgroundPosition: 'cover',
    position: 'fixed',
    bottom: '0',
    right: '0',
    margin: '50px',
  },
  formModal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
}));