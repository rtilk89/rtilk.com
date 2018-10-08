import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 550,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
    title: {
        fontSize: 24,
        textAlign: 'left',
    }
});


class GPGKey extends React.Component {
    render() {
        return (
            <pre>{
`
pub   rsa2048 2018-10-08 [SC] [expires: 2019-10-08]
      2391 7C21 6E42 474A 7329  A78F 00D8 92B0 FAB3 F502
uid   Ryan Thielke <rthielke89@gmail.com>

-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBFu6xYgBCACeNlOSlmUYaCcGc3KNZx4MHqPuIm1ak5aA6T9XLlEk20TodJvE
TMffhVdwAZGRaRVsQuCStaFoD6fDNH0Wp6O9oCJJb540eABiC8Xgh0sbf48g0pfq
R5ErGUeEeBJMhQx36txd+STtUkDNewBaDhJmE/Qrxo7dUi6LIDQvFMpqDvWdMNVz
dOYFfT2kHBVqofzZxe1QcES5p16lZtiECqLcc3NBN4Gjjkp3iKGGr73/rIARW2Cc
4dGGD5oMZ5nA7bCOmcVo6iatnj44027W//cL7B2Q77XF6Y+iybjBKkL+WLRhsQJT
6VJIfjhUojSd4H1GCtbD3ZJoF1FguO5FI8UZABEBAAG0I1J5YW4gVGhpZWxrZSA8
cnRoaWVsa2U4OUBnbWFpbC5jb20+iQFUBBMBCAA+FiEEI5F8IW5CR0pzKaePANiS
sPqz9QIFAlu6xYgCGwMFCQHhM4AFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQ
ANiSsPqz9QK/ewgAg2wH0qe8emJpqRIcs96AOsCsSHEXn/k7oVpicYWBmuXSva2e
ezgC5GRV+Pw3OzhOjzodrUfUSt8i17lU9bdebMAZ/qKUmpsBodFK+qJosWWtqe8h
5DNp9OkhWGWGBi/V0ovfcNFQUCgX++5e35E6YCfprPEqDtmrK8xiStIr6ICl1R2q
/h3YRaTmZ63bql8cjvCURoM03niyXTwr69YTMPvoej6X5+QQO7jcA9DPyYK0RCZd
yHbUx19TQa0WFEmGNuXazC9IMA1CKAaL7cYjx0/5OwZEOtOVXkn/dhl4m2hWdj8M
0kNYvKAA+X6MHWJYC5lfXJhF2Gf8pZsd0aq3XrkBDQRbusWIAQgA3b5HLoWyucgF
IFeBhvTQ6G7WtmYvmFFTGRBfSj2zGs9KlzO/bWUaY9kKnSxGDt6l4r5ua8TET2hw
1OdzQ0iqrRvG9fbW8MHmGK3xPVwDoWnojqaRddGzLtGmDRxROSrYnDBLp8isXGFD
woAlke/GrMynvHU8fAANBiWQGWEQA3yzFc9FfB90wDAEkYn4aSb7nt0SnKc/H5If
1CVPcerEx2KTf2YdjbnQQMdpbhn2fP6qTTTUG6L8z2mbPapg8j0Aw7OCw7iyT/LR
w5yoQ45Rbt2Z+HHsVzOpgPYO7aD+qtDEiWkCtL+akKTKEdxFfAx3FRHZIwjQDzqF
p3IYudFQzQARAQABiQE8BBgBCAAmFiEEI5F8IW5CR0pzKaePANiSsPqz9QIFAlu6
xYgCGwwFCQHhM4AACgkQANiSsPqz9QKboggAimrpkCf0SdRKwX3CgAR2cNe3e7LG
GM7zJS89ydh+Ffxp9g3evGP+PhfboaB5AKKwGPwef7Ks4CR6aWp/L/1OlfUqj6DF
gQ3bFE+++01rx8Zcr2RFUThu2/0JjcOuwX7ctbujljwn1XxAjEVke/RoM0OnWYkK
OErVj5MJSQlCC46mPgnoVbKWxFW+gb9FBR3dZPbwhqIgGGlXD9NqcqjHutdNbr+U
MCw6NC24Q/dk9ot8f7aMig1ZAdhy5zSNMSefbA6DQh5vFimAtwM7z1OrERxti+oc
CNBSPDLLBmFCudf+s8AejQ6Yml+Q+n5DFxNz3JsxyUWZ4fOIGAOM7EkwQA==
=ydIV
-----END PGP PUBLIC KEY BLOCK-----
`}</pre>
        )
    }
}



class GPGCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Typography className={classes.title}>
            GPG Public Key
        </Typography>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <GPGKey />
        </Collapse>
      </Card>
    );
  }
}

GPGCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GPGCard);
