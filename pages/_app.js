import Layout from "../components/Layout";
import '../styles/animate.css'
import '../styles/timeline.css'
import '../styles/app.css'
import {useEffect} from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme';

export default function MyApp(props) {
    const { Component, pageProps } = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}