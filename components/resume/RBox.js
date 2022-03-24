import { Grid, Typography } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mdi/react";

const useStyles = makeStyles(theme => {
    return createStyles({
        title: {
            fontWeight: 600,
        },
        boxDesc: {
            padding: 5
        },
        spacer: {
            paddingBottom: 50
        }
    })
});

const RBox = ({icon,text,children}) => {

    const classes = useStyles();
    return (
        <div className={classes.spacer}>
            <Grid container alignItems="flex-end" spacing={2}>
                <Grid item>
                    <Icon path={icon} color="secondary" size={1.2} />
                </Grid>
                <Grid item>
                    <Typography variant="h4" className={classes.title}>
                        {text}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="body1" align="left" className={classes.boxDesc}>
                {children}
            </Typography>
        </div>

    );

}

export default RBox;