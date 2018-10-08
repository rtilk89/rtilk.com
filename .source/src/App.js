import React from 'react';
import { withStyles } from '@material-ui/core/styles'

import Header from './components/Header';
import About from './components/About';
import GPGCard from './components/GPGCard'


const App = ({ classes }) => (
    <div className={ classes.root }>
        <Header />
        <About />
        <div>
            <GPGCard />
        </div>
    </div>
)

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
    }
}

export default withStyles(styles)(App)
