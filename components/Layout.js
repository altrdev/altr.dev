import Head from "next/head";
import React from "react";
import theme from "../utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";
import Footer from "./Footer";
import {properties} from "../utils/properties";

export default class Layout extends React.Component {

    render() {
        const { children, title = 'altr.dev - Alessandro Travi Software Developer' } = this.props;
        return (
            <div>
                <Head>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="author" content="Alessandro Travi" />
                    <meta name="description" content="Official site about Alessandro Travi aka altrdev. I’m a software engineer always willing to put myself out there and push myself beyond my limits." />
                    <meta name="robots" content="index, follow" />
                    <meta name="yandex-verification" content="c5acf8bbe12bc1d5" />
                    <meta name="msvalidate.01" content="D5D6C71B573ADD7743E2BFEF1E56E6D9" />

                    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="800b48d7-e6d0-4aac-b9ac-94d622bdac24" type="text/javascript" async></script>
                    <script type="text/plain" data-cookieconsent="statistics" dangerouslySetInnerHTML={{ __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
                ga('create', 'UA-135914500-1', 'auto');
                ga('send', 'pageview');` }} />

                    <link rel="manifest" href="./manifest.json" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <title>{ title }</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    { children }
                    <script id="CookieDeclaration" src="https://consent.cookiebot.com/800b48d7-e6d0-4aac-b9ac-94d622bdac24/cd.js" type="text/javascript" async></script>
                    <Footer data={properties}/>
                </ThemeProvider>

            </div>
        );
    }
}