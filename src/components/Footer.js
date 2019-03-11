import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ScrollButton from './ScrollButton';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: 150
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 150
    },
    infoFooter: {
        margin: "auto",
        color: theme.palette.primary.contrastText,
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: 2
    }
});

class Footer extends Component {
    render() {
        const { classes } = this.props;
        
        return (
            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
                        <Typography variant="subtitle1" align="center" className={classes.infoFooter}>
                            ©2019 - Alessandro Travi
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    } 
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles) (Footer);