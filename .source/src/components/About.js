import React from 'react';
import { withStyles } from 'material-ui/styles';
import TopicContainer from './TopicContainer';

const styles = {
  root: {
      flex: 1,
      padding: 20,
  },
}

const About = ({ classes }) => (
    <div className={classes.root}>
      <TopicContainer />
    </div>
)

export default withStyles(styles)(About);
