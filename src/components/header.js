import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    height: '36px',
    listStyleType: 'none',
  },
  navName: {
    paddingTop: theme.spacing.unit * .9,
    textAlign: 'left',
    float: 'left',
    fontSize: 24,
  },
  link: {
    paddingTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    textAlign: 'right',
    float: 'right',
    fontSize: 16,
    color: 'white',
    textDecoration: 'none',
  }
})

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ul className={classes.root}>
          <li className={classes.navName}>Ryan Thielke</li>
          <li className={classes.link}><a>CV</a></li>
          <li className={classes.link}><a href="https://github.com/rtilk89">GitHub</a></li>
          <li className={classes.link}><a href="https://www.linkedin.com/in/ryanthielke/">LinkedIn</a></li>
        </ul>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavBar);
