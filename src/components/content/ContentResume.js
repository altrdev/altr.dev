import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Title from './ContentTitle';
import { properties } from '../../properties';

const styles = theme => ({
    content: {
        height: 1000,
        fontSize: '1rem',
        textAlign: "center",
        padding:20
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    }
});

class ContentResume extends Component {

    downloadCV(){
        window.open(properties.content.cv_link, "_blank");
    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.content}>
                    <Fab variant="extended" aria-label="Download" color="primary" onClick={()=>this.downloadCV()}>
                        <DownloadIcon className={classes.extendedIcon} />
                        {properties.content.labels.download}
                    </Fab>
                    <Title value={properties.titles.skills} />
                    <Typography variant="body1" align="center">
                        Under construction
                    </Typography>
                </div>
            </React.Fragment>
        );
    } 
}

ContentResume.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles) (ContentResume);