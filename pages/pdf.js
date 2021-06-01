import {titles, content, floatingIntro} from "../data";
import moment from "moment";
import {Box, createStyles, Grid, makeStyles, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {mdiAccount, mdiContacts, mdiStar, mdiBriefcase} from '@mdi/js'
import RBox from "../components/resume/RBox";
import Obfuscate from "react-obfuscate";
import RWork from "../components/resume/RWork";
import RSkills from "../components/resume/RSkills";
import { useRouter } from 'next/router'
import * as queryString from "query-string";

export async function getStaticProps(context) {

    floatingIntro.tableRows.map(function(row, i) {
        if(row.label === "BirthDate") {
            row.label = "Age"
            const userDOB = moment(row.value, 'D/M/YYYY');
            row.value = moment().diff(userDOB, 'years')
        }
    });

    return {
        props: {
            titles: titles,
            content: content,
            floatingIntro: floatingIntro,

        },
    }
}

const useStyles = makeStyles(theme => {
    return createStyles({
        boxTitle: {
            padding: theme.spacing(4, 2),
            textAlign: 'center',
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: 'none'
        },
        boxInfo: {
            padding: theme.spacing(4, 2),
            height: '100%',
            textAlign: 'left',
            background: theme.palette.primary.gray,
            color: theme.palette.text.primary,
            boxShadow: 'none'
        },
        paper: {
            background: theme.palette.primary.gray,
            boxShadow: 'none',
            paddingBottom: 50
        },
        paperMain: {
            background: theme.palette.primary.resumeMain,
            boxShadow: 'none',
            paddingBottom: 60
        },
        title: {
            fontWeight: 600,
            marginBottom: theme.spacing(1),
            letterSpacing: 2,
        },
        work: {
            fontWeight: 600,
            marginBottom: theme.spacing(0.5),
            letterSpacing: 2,
        },
        icon: {
            paddingRight: 20,
            paddingLeft: 20,
            textTransform: 'uppercase',
        },
        noPaddingBottom: {
            paddingBottom: '0 !important'
        },
        ulStyle: {
            paddingLeft: 0,
            listStyle: 'none'
        },
        gridTitle: {
            fontWeight: 600
        },
        mainContent: {
            paddingTop: '50px !important',
            backgroundColor: theme.palette.primary.resumeMain
        }
    })
});

const Pdf = ({...props}) => {
    const classes = useStyles();

    const router = useRouter()
    router.query = queryString.parse(router.asPath.split(/\?/)[1]);
    const {obfuscate} = router.query

    return (
        <Grid container spacing={2}>
            <Grid item xs={4} className={classes.noPaddingBottom}>
                <Box className={classes.boxTitle}>
                    <Typography variant="h4" align="center" className={classes.title}>
                        {props.floatingIntro.name}
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.work}>
                        {props.floatingIntro.workTitle}
                    </Typography>
                </Box>
                <Box className={classes.boxInfo}>
                    <Paper className={classes.paper}>
                        <RBox icon={mdiAccount} text={props.titles.aboutMe}>
                            {props.floatingIntro.description}
                        </RBox>
                    </Paper>
                    <Paper className={classes.paper}>
                        <RBox icon={mdiContacts} text={props.titles.contacts}>
                            <ul className={classes.ulStyle}>
                            {props.floatingIntro.tableRows.map(row => (
                                <li key={row.id}>
                                    <Grid container>
                                        <Grid item xs={4} className={classes.gridTitle}>
                                            {row.label}
                                        </Grid>
                                        <Grid item xs={8}>
                                            {
                                                row.label === "Email"
                                                ? <Obfuscate email={row.value} obfuscate={unwrapTextBoolean(obfuscate)}/>
                                                : row.label === "Website"
                                                ? <Obfuscate href={row.value} obfuscate={unwrapTextBoolean(obfuscate)}/>
                                                : row.value
                                            }
                                        </Grid>
                                    </Grid>
                                </li>
                            ))}
                            </ul>
                        </RBox>
                    </Paper>
                    <Paper className={classes.paper}>
                        <RBox icon={mdiStar} text={props.titles.skills}>
                            <RSkills textProficient={content.skills.proficient}
                                     textComfortable={content.skills.comfortable}
                                     textFamiliar={content.skills.familiar}
                            />
                        </RBox>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={8} className={classes.mainContent}>
                <Paper className={classes.paperMain}>
                    <RBox icon={mdiBriefcase} text={props.titles.experience}>
                        {props.content.workExperience.map((experience, i) => {
                            return <RWork key={i} date={experience.date} title={experience.title} description={experience.description} company={experience.company} />
                        })}
                    </RBox>
                </Paper>
            </Grid>
        </Grid>
    );
}

function unwrapTextBoolean(tB){
    console.log(tB)
    if(tB === 'true') return true;
    if(tB === 'false') return false;
    return null;
}

export default Pdf;
