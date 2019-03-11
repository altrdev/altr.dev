import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';


const styles = theme => ({
     divider: {
         backgroundColor: theme.palette.primary.main,
         width: 50,
         height: 3,
         marginBottom: theme.spacing.unit
     }  
});

class CustomDivider extends Component {
    render() {
        const { classes } = this.props;
        return (   
            <Divider variant="fullWidth" className={classes.divider}/>
        );
    }
}

CustomDivider.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles) (CustomDivider);