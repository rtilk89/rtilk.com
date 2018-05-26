import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    height: '36px',
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  link: {
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    fontSize: 16,
    float: 'center',
    textAlign: 'center',
    textDecoration: 'none',
  }
})

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ul className={classes.root}>
          <li className={classes.link}><a href="https://www.linkedin.com/in/ryanthielke/">LinkedIn</a></li>
          <li className={classes.link}><a href="https://github.com/rtilk89">GitHub</a></li>
        </ul>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer);
