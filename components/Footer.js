import ScrollButton from './ScrollButton';
import { AppBar, Toolbar, Typography } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => {
    return createStyles({
        appBarFooter: {
            top: 'auto',
            bottom: 0,
            height: 150
        },
        toolbarFooter: {
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 150
        },
        infoFooter: {
            margin: "auto",
            color: theme.palette.primary.contrastText,
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: 2
        }
    })
});

const Footer = ({...props}) => {
    const classes = useStyles();

    return (
        <AppBar position="relative" color="primary" className={classes.appBarFooter}>
            <Toolbar className={classes.toolbarFooter}>
                <ScrollButton delayInMs="12"/>
                <Typography variant="subtitle1" align="center" className={classes.infoFooter}>
                    {(new Date().getFullYear()) + props.footer}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;