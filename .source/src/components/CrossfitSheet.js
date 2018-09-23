import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
      padding: 10,
  },
}

const CrossfitSheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography variant='headline' component='h3'>
            Crossfit
        </Typography>
        <Typography component='p'>
        </Typography>
    </Paper>
)

export default withStyles(styles)(CrossfitSheet);
