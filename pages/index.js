import ParallaxBackground from "../components/ParallaxBackground";
import FloatingIntro from "../components/FloatingIntro";
import ContentResume from "../components/content/ContentResume";
import {titles, content, floatingIntro, info} from "../data";
import moment from "moment";
import Footer from "../components/Footer";
import React from "react";

export async function getStaticProps(context) {

    floatingIntro.tableRows.map(function(row, i) {
        if(row.label === "BirthDate") {
            row.label = "Age"
            const userDOB = moment(row.value, 'D/M/YYYY');
            row.value = moment().diff(userDOB, 'years')
        }
    });

    return {
        props: {
            titles: titles,
            content: content,
            floatingIntro: floatingIntro,
            footer: info.footer
        },
    }
}

const Home = ({...props}) => {
    return (
        <div className="animateLoading">
            <ParallaxBackground/>
            <FloatingIntro titles={props.titles} floatingIntro={props.floatingIntro}/>
            <ContentResume titles={props.titles} content={content}/>
            <Footer footer={props.footer}/>
        </div>
    );
}

export default Home;
