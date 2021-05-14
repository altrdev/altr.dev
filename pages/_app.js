import Layout from "../components/Layout";
import '../styles/animate.css'
import '../styles/timeline.css'
import {useEffect} from "react";

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
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}