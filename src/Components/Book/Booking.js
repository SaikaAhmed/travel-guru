import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Book.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '25%',
    marginTop: '30px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    color: 'white',
    background: 'gray'
  },
}));

export default function Booking(props) {
  const classes = useStyles();
  return (
    <div>
        <h1>{props.description}</h1>
        <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="From"
            type="date"
            defaultValue="dd-mm-yy"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />

        <TextField
            id="date"
            label="To"
            type="date"
            defaultValue="dd-mm-yy"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
<br/>
<Link to="/login">Start Booking</Link>
    </div>
    
  );
}
