import React from 'react';
import { withStyles } from 'material-ui/styles';
import TechnologySheet from './TechnologySheet';
import FinanceSheet from './FinanceSheet';
import ScienceSheet from './ScienceSheet';
import CrossfitSheet from './CrossfitSheet';

const TopicContainer = ({ classes }) => (
    <div className={classes.root}>
        <div className={classes.sheet}>
            <FinanceSheet />
        </div>
        <div className={classes.sheet}>
            <TechnologySheet />
        </div>
        <div className={classes.sheet}>
            <ScienceSheet />
        </div>
        <div className={classes.sheet}>
            <CrossfitSheet />
        </div>
    </div>
)

const styles = {
    root: {
        display: 'flex',
        alignItems: 'top',
        padding: '0 20px',
    },
    sheet: {
        padding: '0 20px',
        flex: 1,
    }
}

export default withStyles(styles)(TopicContainer);
