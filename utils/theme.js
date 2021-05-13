import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#0EB57D',
            contrastText: '#ffffff'
        }
        // error: will use the default color
    },
});

export default theme;