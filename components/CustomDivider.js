import { Divider } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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
