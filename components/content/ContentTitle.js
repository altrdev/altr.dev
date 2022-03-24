import { Typography } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => {
    return createStyles({
        title: {
            fontWeight: 600,
            margin: theme.spacing(6),
            letterSpacing: 2,
            textTransform: 'uppercase',
            textAlign: 'center'
        },
    })
});

const ContentTitle = ({...props}) => {

    const classes = useStyles();

    return (
        <Typography variant="h5" align="left" color="textSecondary" className={classes.title}>
            {props.value}
        </Typography>
    );

}

export default ContentTitle;
