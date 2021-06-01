import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";

let theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#0EB57D',
            contrastText: '#ffffff',
            gray: '#e9e9ec',
            resumeMain: '#ffffff',
        }
        // error: will use the default color
    },
});

theme = responsiveFontSizes(theme);

export default theme;