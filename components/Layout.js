import Head from "next/head";
import React from "react";
import Script from 'next/script'
import theme from "../utils/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";
import {info} from "../data";

const Layout = ({children, title = info.title}) => {

    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`} strategy='afterInteractive' />
            <Script id="google-analytics" strategy='afterInteractive'>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
                `}
            </Script>
            <Head>
                <meta charSet='utf-8'/>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />

                <link rel="manifest" href="/manifest.json" />
                <link href='/favicon.ico' rel='icon' />
                <link rel='apple-touch-icon' sizes='152x152' href='/images/icons/touch-icon-ipad.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/images/icons/touch-icon-iphone-retina.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/images/icons/touch-icon-ipad-retina.png' />
                <meta name="theme-color" content="#1BA96A"/>

                <meta name="author" content="Alessandro Travi" />
                <meta name="description" content="Official site about Alessandro Travi aka altrdev. I’m a software engineer always willing to put myself out there and push myself beyond my limits." />
                <meta name="robots" content="index, follow" />
                <meta name="yandex-verification" content="c5acf8bbe12bc1d5" />
                <meta name="msvalidate.01" content="D5D6C71B573ADD7743E2BFEF1E56E6D9" />
                
                <title>{ title }</title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                { children }
            </ThemeProvider>
        </>
    );

}

export default Layout;