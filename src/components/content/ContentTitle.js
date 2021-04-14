import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    title: {
        fontWeight: 600,
        margin: theme.spacing(6),
        letterSpacing: 2,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
});

class ContentTitle extends Component {
    render() {
        const { classes, value } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <Typography variant="h5" align="left" color="textSecondary" className={classes.title}>
                    {value}
                </Typography>
            </React.Fragment>
        );
    }
}

ContentTitle.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
  };

export default withStyles(styles) (ContentTitle);
