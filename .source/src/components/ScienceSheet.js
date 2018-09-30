import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const ScienceSheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography className={classes.title} variant='headline' component='h3'>
            Science
        </Typography>
        <Typography component='p'>
        </Typography>
    </Paper>
)

const styles = {
  root: {
      padding: 10,
  },
  title: {
      paddingBottom: 10,
  },
}

export default withStyles(styles)(ScienceSheet);
