import ScrollButton from './ScrollButton';
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Footer = ({...props}) => {
    const theme = useTheme();

    const appBarFooterStyle = {
        top: 'auto',
        bottom: 0,
        height: 150
    };

    const toolbarFooterStyle = {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 150
    };

    const infoFooterStyle = {
        margin: "auto",
        color: theme.palette.primary.contrastText,
        textTransform: 'uppercase',
        fontWeight: 600,
        letterSpacing: 2
    };

    return (
        <AppBar position="relative" color="primary" sx={appBarFooterStyle}>
            <Toolbar sx={toolbarFooterStyle}>
                <ScrollButton delayInMs="12"/>
                <Typography variant="subtitle1" align="center" sx={infoFooterStyle}>
                    {(new Date().getFullYear()) + props.footer}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;