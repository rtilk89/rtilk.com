import React from 'react';
import { withStyles } from '@material-ui/core'

import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

const App = ({ classes }) => (
    <div className={ classes.root }>
        <Header />
        <About />
        <Footer />
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
