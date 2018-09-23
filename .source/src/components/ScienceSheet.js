import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
      padding: 10,
  },
}

const ScienceSheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography variant='headline' component='h3'>
            Science
        </Typography>
    </Paper>
)

export default withStyles(styles)(ScienceSheet);
