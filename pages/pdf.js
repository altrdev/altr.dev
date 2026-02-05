import {titles, content, floatingIntro} from "../data";
import moment from "moment";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {mdiAccount, mdiContacts, mdiStar, mdiBriefcase, mdiSchool} from '@mdi/js'
import Obfuscate from "react-obfuscate";
import RBox from "../components/resume/RBox";
import RWork from "../components/resume/RWork";
import REdu from "../components/resume/REdu";
import RSkills from "../components/resume/RSkills";
import {useRouter} from 'next/router'
import * as queryString from "query-string";
import { useTheme } from '@mui/material/styles';

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

const Pdf = ({...props}) => {
    const theme = useTheme();

    const boxTitleStyle = {
        padding: theme.spacing(4, 2),
        textAlign: 'center',
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: 'none'
    };

    const boxInfoStyle = {
        padding: theme.spacing(4, 2),
        height: '100%',
        textAlign: 'left',
        background: theme.palette.primary.gray,
        color: theme.palette.text.primary,
        boxShadow: 'none'
    };

    const paperStyle = {
        background: theme.palette.primary.gray,
        boxShadow: 'none'
    };

    const paperMainStyle = {
        background: theme.palette.primary.resumeMain,
        boxShadow: 'none',
        paddingBottom: 60
    };

    const titleStyle = {
        fontWeight: 600,
        marginBottom: theme.spacing(1),
        letterSpacing: 2,
    };

    const workStyle = {
        fontWeight: 600,
        marginBottom: theme.spacing(0.5),
        letterSpacing: 2,
    };

    const noPaddingBottomStyle = {
        paddingBottom: '0 !important'
    };

    const ulStyle = {
        paddingLeft: 0,
        listStyle: 'none'
    };

    const gridTitleStyle = {
        fontWeight: 600
    };

    const mainContentStyle = {
        paddingTop: '50px !important',
        backgroundColor: theme.palette.primary.resumeMain
    };

    const router = useRouter()
    router.query = queryString.parse(router.asPath.split(/\?/)[1]);
    const {obfuscate} = router.query

    return (
        <Grid container spacing={2}>
            <Grid item xs={4} sx={noPaddingBottomStyle}>
                <Box sx={boxTitleStyle}>
                    <Typography variant="h4" align="center" sx={titleStyle}>
                        {props.floatingIntro.name}
                    </Typography>
                    <Typography variant="h5" align="center" sx={workStyle}>
                        {props.floatingIntro.workTitle}
                    </Typography>
                </Box>
                <Box sx={boxInfoStyle}>
                    <Paper sx={paperStyle}>
                        <RBox icon={mdiAccount} text={props.titles.aboutMe}>
                            {props.floatingIntro.description}
                        </RBox>
                    </Paper>
                    <Paper sx={paperStyle}>
                        <RBox icon={mdiContacts} text={props.titles.contacts}>
                            <ul style={ulStyle}>
                            {props.floatingIntro.tableRows.map(row => (
                                <li key={row.id}>
                                    <Grid container>
                                        <Grid item xs={4} sx={gridTitleStyle}>
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
                    <Paper sx={paperStyle}>
                        <RBox icon={mdiStar} text={props.titles.skills}>
                            <RSkills textProficient={props.content.skills.proficient}
                                     textComfortable={props.content.skills.comfortable}
                                     textFamiliar={props.content.skills.familiar}
                            />
                        </RBox>
                    </Paper>
                </Box>
            </Grid>
            <Grid item xs={8} sx={mainContentStyle}>
                <Paper sx={paperMainStyle}>
                    <RBox icon={mdiBriefcase} text={props.titles.experience}>
                        {props.content.workExperience.map((experience, i) => {
                            return <RWork key={i} date={experience.date} title={experience.title} description={experience.description} company={experience.company} />
                        })}
                    </RBox>
                    <RBox icon={mdiSchool} text={props.titles.education}>
                        {props.content.educations.map((ed, i) => {
                            return <REdu key={i} date={ed.date} title={ed.title} company={ed.company} />
                        })}
                    </RBox>
                </Paper>
            </Grid>
        </Grid>
    );
}

function unwrapTextBoolean(tB){
    if(tB === 'true') return true;
    if(tB === 'false') return false;
    return null;
}

export default Pdf;
