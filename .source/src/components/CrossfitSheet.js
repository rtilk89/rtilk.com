import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
      padding: 10,
  },
  title: {
    paddingBottom: 10,
  },
}

const xfitStartDate = new Date(2016, 10, 31);
const today = new Date();
const delta = today - xfitStartDate

const CrossfitSheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography className={classes.title} variant='headline' component='h3'>
            Crossfit
        </Typography>
        <Typography component='p'>
        </Typography>
    </Paper>
)

export default withStyles(styles)(CrossfitSheet);
