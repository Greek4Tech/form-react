import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  icon: {
    color: theme.palette.success.main,
    fontSize: '4rem',
    marginBottom: theme.spacing(2),
  },
  message: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const Success = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <CheckCircleIcon className={classes.icon} />
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.message}>
            Your form was submitted successfully
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Success;
