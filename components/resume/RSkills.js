import { Grid, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mdi/react";
import {mdiStar} from "@mdi/js";

const useStyles = makeStyles(theme => {
    return createStyles({
        stars: {
            verticalAlign: "text-top",
            paddingRight: "5px",
            color: theme.palette.primary.main
        },
        grid: {
            paddingBottom: "10px"
        }
    })
});

const RSkills = ({textProficient,textComfortable,textFamiliar}) => {

    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} className={classes.grid}>
                <Typography variant="h6">
                    <span className={classes.stars}>
                        <Icon path={mdiStar} size="1.5rem"/>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".75"}}/>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".5"}}/>
                    </span>
                    Proficient
                </Typography>
                <div>
                    {textProficient}
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} className={classes.grid}>
                <Typography variant="h6">
                    <span className={classes.stars}>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".75"}}/>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".5"}}/>
                    </span>
                    Comfortable
                </Typography>
                <div>
                    {textComfortable}
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} className={classes.grid}>
                <Typography variant="h6">
                    <span className={classes.stars}>
                        <Icon path={mdiStar} size="1.5rem" style={{opacity: ".5"}}/>
                    </span>
                    Familiar
                </Typography>
                <div>
                    {textFamiliar}
                </div>
            </Grid>
        </Grid>
    );

}

export default RSkills;