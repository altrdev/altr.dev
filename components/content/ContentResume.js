import React, {useState} from 'react';
import Title from './ContentTitle';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';
import RSkills from "../resume/RSkills";
import DownloadIcon from '@mui/icons-material/CloudDownload';
import LinkIcon from '@mui/icons-material/Link';
import { Paper, Grid, Link, Fab, IconButton, Typography, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const ContentResume = ({...props}) => {
    const theme = useTheme();
    
    const lgWidth = theme.breakpoints.values['lg'] - Number(theme.spacing(3).slice(0, -2));
    
    const layoutStyle = {
        width: 'auto',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(10),
        height: "100%",
        fontSize: '1rem',
        textAlign: "center",
        paddingTop:20,
        padding: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3),
        },
    };

    const extendedIconStyle = {
        marginRight: theme.spacing(1)
    };

    const mainPaperStyle = {
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(6))]: {
            padding: theme.spacing(3)
        },
        textAlign: 'left'
    };

    const paperStyle = {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none'
    };

    const progressWrapperStyle = {
        marginTop: theme.spacing(4),
        textAlign: 'left'
    };

    const spanPercentageStyle = {
        float: 'right',
        textAlign: 'right'
    };

    const descriptionLabelStyle = {
        fontWeight: 600,
        color: theme.palette.text.secondary
    };

    const progressStyle = {
        height: 6
    };

    const timelineBoxStyle = {
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(6))]: {
            padding: theme.spacing(3)
        },
        borderLeft: 3
    };

    const borderTopStyle = {
        borderTop: `4px solid ${theme.palette.primary.main}`
    };

    const projectTitleStyle = {
        fontWeight: 600,
        marginBottom: theme.spacing(1)
    };

    const marginIconStyle = {
        marginLeft: theme.spacing(1)
    };

    return (
        <Box sx={layoutStyle}>
            <Link href={`https://api.microlink.io/?url=${encodeURIComponent("https://altr.dev/pdf?obfuscate=false")}&pdf=true&embed=pdf.url&scale=1&margin=0.4cm&format=letter`} target="_blank">
                <Fab variant="extended" aria-label="Download" color="primary">
                    <DownloadIcon sx={extendedIconStyle} />
                    {props.content.labels.download}
                </Fab>
            </Link>
            <Title value={props.titles.skills} />
            <Paper sx={mainPaperStyle}>
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
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: theme.spacing(3)
            }}>
                {props.content.personalProjects.map((project, i) => {
                    return (
                        <Box key={i} sx={{
                            flex: { xs: '0 0 100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 20px)' }
                        }}>
                            <Paper sx={{...mainPaperStyle, ...borderTopStyle, height: "100%"}}>
                                <Typography variant="h6" align="left" sx={projectTitleStyle}>
                                    {project.title}
                                    {project.link ?
                                        <IconButton
                                            aria-label="Link"
                                            color="primary"
                                            href={project.link}
                                            target="_blank"
                                            sx={marginIconStyle}
                                            size="large">
                                            <LinkIcon fontSize="small" />
                                        </IconButton>
                                    : null}
                                </Typography>
                                <Typography variant="body1" align="left" style={{whiteSpace: "pre-wrap"}}>{project.description}</Typography>
                            </Paper>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );

}

export default ContentResume;
