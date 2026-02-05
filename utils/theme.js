import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
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
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1920,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;