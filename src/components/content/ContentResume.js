import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Title from './ContentTitle';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';

import { properties } from '../../properties';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 10,
        height: "100%",
        fontSize: '1rem',
        textAlign: "center",
        paddingTop:20,
        [theme.breakpoints.up(1200 + theme.spacing.unit * 2 * 2)]: {
          width: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }
    },
    extendedIcon: {
        marginRight: theme.spacing.unit
    },
    mainPaper: {
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
          padding: theme.spacing.unit * 3
        }
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none'
    },
    progressWrapper: {
        marginTop: theme.spacing.unit * 4,
        textAlign: 'left'
    },
    spanPercentage: {
        float: 'right',
        textAlign: 'right'
    },
    descriptionLabel: {
        fontWeight: 600,
        color: theme.palette.text.secondary
    },
    progress: {
        height: 6
    },
    timelineBox: {
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
          padding: theme.spacing.unit * 3
        },
        borderLeft: 3
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
                <div className={classes.layout}>
                    <Fab variant="extended" aria-label="Download" color="primary" onClick={()=>this.downloadCV()}>
                        <DownloadIcon className={classes.extendedIcon} />
                        {properties.content.labels.download}
                    </Fab>
                    <Title value={properties.titles.skills} />
                    <Paper className={classes.mainPaper}>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    {properties.content.skillsLanguage.map(skill => (
                                        <div key={skill.id} className={classes.progressWrapper}>
                                            <Typography variant="body1" align="left" className={classes.descriptionLabel}>
                                                {skill.label}
                                                <span className={classes.spanPercentage}>{skill.value}%</span>
                                            </Typography>        
                                            <LinearProgress variant="determinate" value={skill.value} className={classes.progress}/>
                                        </div>
                                    ))}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    {properties.content.skillsTool.map(skill => (
                                        <div key={skill.id} className={classes.progressWrapper}>
                                            <Typography variant="body1" align="left" className={classes.descriptionLabel}>
                                                {skill.label}
                                                <span className={classes.spanPercentage}>{skill.value}%</span>
                                            </Typography>        
                                            <LinearProgress variant="determinate" value={skill.value} className={classes.progress}/>
                                        </div>
                                    ))}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Title value={properties.titles.experience} />
                    <Timeline>
                    {properties.content.workExperience.map((experience, i) => {
                        return <TimelineItem key={i} date={experience.date} title={experience.title} description={experience.description} company={experience.company} />
                    })}
                    </Timeline>
                    <Title value={properties.titles.education} />
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