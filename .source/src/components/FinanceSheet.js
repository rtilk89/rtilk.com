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
  }
}

const FinanceSheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography className={classes.title} variant='headline' component='h3'>
            Finance
        </Typography>
        <Typography component='p'>
        </Typography>
    </Paper>
)

export default withStyles(styles)(FinanceSheet);
