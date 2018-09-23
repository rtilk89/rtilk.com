import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
      padding: 10,
  },
}

const FinanceSheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography variant='headline' component='h3'>
            Finance
        </Typography>
        <Typography component='p'>
            Currently working at a quant hedge fund. Interested in all markets,
            specifically derivaties, and how they relate.
        </Typography>
    </Paper>
)

export default withStyles(styles)(FinanceSheet);
