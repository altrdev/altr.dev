import ParallaxBackground from "../components/ParallaxBackground";
import FloatingIntro from "../components/FloatingIntro";
import ContentResume from "../components/content/ContentResume";
import {properties} from "../utils/properties";
import React from "react";

export default function Home() {
    return (
        <div className="animateLoading">
            <ParallaxBackground/>
            <FloatingIntro data={properties}/>
            <ContentResume data={properties}/>
            <script id="CookieDeclaration" src="https://consent.cookiebot.com/800b48d7-e6d0-4aac-b9ac-94d622bdac24/cd.js" type="text/javascript" async />
        </div>
    );
}

