import React from 'react';
import { withStyles } from 'material-ui/styles';

const Footer = ({ classes }) => (
	<div className={classes.root} />
)

const styles = {
    root: {
	height: 40,
    }
}

export default withStyles(styles)(Footer);
