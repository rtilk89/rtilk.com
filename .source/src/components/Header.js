import React from 'react';
import { withStyles } from '@material-ui/core';

const Header = ({ classes }) => (
    <div className={classes.root}>
    <div className={classes.name}>Ryan Thielke</div>
        <div className={classes.space} />
        <a
          className={classes.link}
          href="https://github.com/rtilk89"
         >
            Github
        </a>
        <a
          className={classes.link}
          href="https://www.linkedin.com/in/ryanthielke/"
        >
          LinkedIn
        </a>
        <a
          className={classes.link}
        >
          CV
        </a>
    </div>
)

const styles = {
    root: {
      backgroundColor: '#2c323e',
      height: 45,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      padding: '0 14px',
    },
    space: {
      flex: 1,
    },
    link: {
      padding: '0 14px',
    },
}

export default withStyles(styles)(Header);
