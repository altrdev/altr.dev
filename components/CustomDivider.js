import {createStyles, makeStyles, Divider} from "@material-ui/core";

const useStyles = makeStyles(theme => {
    return createStyles({
        divider: {
            backgroundColor: theme.palette.primary.main,
            width: 50,
            height: 3,
            marginBottom: theme.spacing(1)
        }
    })
});

const CustomDivider = () => {

    const classes  = useStyles();

    return (
        <Divider variant="fullWidth" className={classes.divider}/>
    );

}

export default CustomDivider;
