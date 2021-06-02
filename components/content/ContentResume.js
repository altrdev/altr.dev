import Title from './ContentTitle';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import RSkills from "../resume/RSkills";
import DownloadIcon from '@material-ui/icons/CloudDownload';
import LinkIcon from '@material-ui/icons/Link';
import {createStyles, makeStyles, Paper, Grid, Link, Fab, IconButton, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => {
    return createStyles({
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(10),
            height: "100%",
            fontSize: '1rem',
            textAlign: "center",
            paddingTop:20,
            [theme.breakpoints.up(1200 + theme.spacing(4))]: {
                width: 1200,
                marginLeft: 'auto',
                marginRight: 'auto',
            }
        },
        extendedIcon: {
            marginRight: theme.spacing(1)
        },
        mainPaper: {
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(6))]: {
                padding: theme.spacing(3)
            }
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            boxShadow: 'none'
        },
        progressWrapper: {
            marginTop: theme.spacing(4),
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
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(6))]: {
                padding: theme.spacing(3)
            },
            borderLeft: 3
        },
        borderTop:{
            borderTop: `4px solid ${theme.palette.primary.main}`
        },
        projectTitle: {
            fontWeight: 600,
            marginBottom: theme.spacing(1)
        },
        marginIcon: {
            marginLeft: theme.spacing(1)
        }
    })
});

const ContentResume = ({...props}) => {

    const classes = useStyles();
    return (
        <div className={classes.layout}>
            <Link href="/api/pdf" target={"_blank"}>
                <Fab variant="extended" aria-label="Download" color="primary">
                    <DownloadIcon className={classes.extendedIcon} />
                    {props.content.labels.download}
                </Fab>
            </Link>
            <Title value={props.titles.skills} />
            <Paper className={classes.mainPaper}>
                <RSkills
                    textProficient={props.content.skills.proficient}
                    textComfortable={props.content.skills.comfortable}
                    textFamiliar={props.content.skills.familiar}
                />
            </Paper>
            <Title value={props.titles.experience} />
            <Timeline>
                {props.content.workExperience.map((experience, i) => {
                    return <TimelineItem key={i} date={experience.date} title={experience.title} description={experience.description} company={experience.company} />
                })}
            </Timeline>
            <Title value={props.titles.education} />
            <Timeline>
                {props.content.educations.map((education, i) => {
                    return <TimelineItem key={i} date={education.date} title={education.title} company={education.company} />
                })}
            </Timeline>
            <Title value={props.titles.projects} />
            <Grid container spacing={3}>
                {props.content.personalProjects.map((project, i) => {
                    return <Grid key={i} item xs={12} sm={4}>
                        <Paper className={`${classes.mainPaper} ${classes.borderTop}`} style={{height: "100%"}}>
                            <Typography variant="h6" align="left" className={classes.projectTitle}>
                                {project.title}
                                {project.link ?
                                    <IconButton aria-label="Link" color="primary" href={project.link} target="_blank" className={classes.marginIcon}>
                                        <LinkIcon fontSize="small" />
                                    </IconButton>
                                : null}
                            </Typography>
                            <Typography variant="body1" align="left" style={{whiteSpace: "pre-wrap"}}>{project.description}</Typography>
                        </Paper>
                    </Grid>
                })}
            </Grid>
        </div>
    );

}

export default ContentResume;
