import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
    demoDiv: {
        height: 1000,
        fontSize: '1rem',
        textAlign: "center",
        padding:20
    }
});

class ContentResume extends Component {
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.demoDiv}>Resume under construction</div>
            </React.Fragment>
        );
    } 
}

ContentResume.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles) (ContentResume);