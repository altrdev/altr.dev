import { Grid, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mdi/react";
import {mdiCalendar} from '@mdi/js'


const useStyles = makeStyles(theme => {
    return createStyles({
        container: {
            paddingTop: 20,
        },
        title: {
            fontWeight: 600,
        },
        date: {
            fontWeight: 500,
            color: "#212529"
        },
        boxDesc: {
            padding: "10px 0px"
        },
        contrastTitle: {
            borderRadius: ".25rem",
            backgroundColor: "#33333d",
            color: "#fff",
            padding: "5px 8px",
            lineHeight: 2
        },
    })
});

const RWork = ({...props}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item>
                    <Typography variant="h5" className={classes.title}>
                        <span className={classes.contrastTitle}>{props.title}</span> at {props.company}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center">
                <Grid item style={{ verticalAlign: "middle", display: "inline-flex"}}>
                    <Icon path={mdiCalendar} color="#212529" size={0.8} />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" className={classes.date}>
                        {props.date}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" align="left" className={classes.boxDesc} style={{whiteSpace: "pre-wrap"}}>
                {props.description}
            </Typography>
        </div>

    );

}

export default RWork;