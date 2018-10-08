import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TechnologySheet from './TechnologySheet';
import FinanceSheet from './FinanceSheet';
import ScienceSheet from './ScienceSheet';
import CrossfitSheet from './CrossfitSheet';


const About = ({ classes }) => (
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
      flex: 1,
      display: 'flex',
      alignItems: 'top',
      padding: 20,
  },
   sheet: {
        padding: '0 20px',
        flex: 1,
  },
}

export default withStyles(styles)(About);
