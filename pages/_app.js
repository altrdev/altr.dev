import Layout from "../components/Layout";
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/animate.css'
import '../styles/timeline.css'

export default function MyApp(props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
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

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};