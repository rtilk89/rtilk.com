import React from 'react';
import { withStyles } from 'material-ui/styles';

const TopicContainer = ({ classes }) => (
    <div className={classes.root}>
    </div>
)

const styles = {
    root: {
        display: 'flex',
        alignItems: 'top',
        padding: '0 20px',
        flexDirection: 'row',
    },
    sheet: {
        padding: '0 20px',
        flex: 1,
    }
}

export default withStyles(styles)(TopicContainer);
