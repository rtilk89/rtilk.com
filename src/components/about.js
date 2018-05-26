import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: 500,
    height: 500,
    paddingLeft: theme.spacing.unit * 20,
    paddingTop: theme.spacing.unit * 10,
    paddingBottom: theme.spacing.unit * 10,
  }
})

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>The intersection of finance, technology, and science</p>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(About);
