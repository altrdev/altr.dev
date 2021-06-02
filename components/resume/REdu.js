import Typography from '@material-ui/core/Typography';
import {createStyles, Grid, makeStyles} from "@material-ui/core";
import Icon from "@mdi/react";
import {mdiCalendar, mdiBank} from '@mdi/js'


const useStyles = makeStyles(theme => {
    return createStyles({
        container: {
            paddingTop: 20
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

const REdu = ({...props}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container>
                <Grid item>
                    <Typography variant="h5" className={classes.title}>
                        {props.title}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid container item xs={4} spacing={1} alignItems="center">
                    <Grid item style={{ verticalAlign: "middle", display: "inline-flex"}}>
                        <Icon path={mdiBank} color="#212529" size={0.8} />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" className={classes.date}>
                            {props.company}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item xs={4} spacing={1} alignItems="center">
                    <Grid item style={{ verticalAlign: "middle", display: "inline-flex"}}>
                        <Icon path={mdiCalendar} color="#212529" size={0.8} />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" className={classes.date}>
                            {props.date}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            {/*<Typography variant="body1" align="left" className={classes.boxDesc} style={{whiteSpace: "pre-wrap"}}>*/}
            {/*    {props.description}*/}
            {/*</Typography>*/}
        </div>

    );

}

export default REdu;