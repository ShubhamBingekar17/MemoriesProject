import { makeStyles } from '@material-ui/core/styles';
import { height } from '@mui/system';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: '50%',
    maxHeight: '100vh',
    margin: '10px auto',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  
}));