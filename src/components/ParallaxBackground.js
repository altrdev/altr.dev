import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Background from '../images/background_image.jpg';

const styles = theme => ({
    parallax: {
        /* The image used */
        backgroundImage: `url(${Background})`,
        minHeight: 500,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: 0.7,
        filter: 'alpha(opacity=50)'
    }
});

class ParallaxBackground extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.parallax}></div>
            </React.Fragment>
        );
    } 
}

ParallaxBackground.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles) (ParallaxBackground);