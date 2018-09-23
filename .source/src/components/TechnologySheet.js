import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
      padding: 10,
  },
}

const TechnologySheet = ({ classes })=> (
    <Paper className={classes.root}>
        <Typography variant='headline' component='h3'>
            Technology
        </Typography>
        <Typography component='p'>
            <ul>
                <li>Python</li>
                <li>Linux</li>
                <li>Docker</li>
                <li>React</li>
            </ul>
        </Typography>
    </Paper>
)

export default withStyles(styles)(TechnologySheet);
