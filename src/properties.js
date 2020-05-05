import React from "react";
import { mdiLinkedinBox, mdiInstagram, mdiGithubCircle, mdiTwitter } from '@mdi/js'
import Obfuscate from 'react-obfuscate'

let id = 0;
function createData(label, value) {
  id += 1;
  return { id, label, value };
}

export const properties = {
    titles: {
        aboutMe: "About me",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        projects: "Personal Projects"
    },
    footer:{
        text: "©2020 - altrdev"
    },
    floatingIntro: {
        name: "Alessandro Travi",
        workTitle: "Crazy Software Engineer",
        description: "I’m a software engineer always willing to put myself out there and push myself beyond my limits.\nRight after high school diploma, while working as postman, I started challenging myself with both personal side-projects and freelance consulting.\nI'm not sure what being a 'self starter' means, but people tends to call me that.",
        icons: [
            createData(mdiLinkedinBox, "https://www.linkedin.com/in/alessandrotravi/en"),
            createData(mdiGithubCircle, "https://github.com/altrdev/"),
            createData(mdiInstagram, "https://www.instagram.com/alessandro.travi/"),
            createData(mdiTwitter, "https://twitter.com/altrdev")
        ],
        tableRows: [
            createData("Age", 30),
            createData("Country", "Como Lake, Italy"),
            createData("Email", <Obfuscate email="info@altr.dev"/>),
            createData("Website", "https://altr.dev")
        ]
    },
    content: {
        cv_link: "https://docs.google.com/viewer?url=https://docs.google.com/document/d/1_cOe8WyJvwj0Jn-cmHZYplzdJk8izdDVI9O38L8fgIY/export?format=pdf",
        labels: {
            download: "Download resume"
        },
        skillsLanguage: [
            createData("Java", 95),
            createData("NodeJs", 80),
            createData("ReactJs", 65),
            createData("Kotlin", 85)
        ],
        skillsTool: [
            createData("Springboot", 90),
            createData("Docker", 85),
            createData("MongoDB", 87),
            createData("Solidity", 75) 
        ],
        workExperience:[
            {
                date: "2019 – now",
                title: "Software Engineer",
                company: "Xpeppers Sagl (Claranet Factory)",
                description: "Requirements analysis and software development."
            },
            {   
                date: "2016 – 2019",
                title: "Software Engineer",
                company: "Mondora srl sb (TeamSystem Factory)",
                description: "Requirements analysis and software development. Team working remotely with Agile methodologies (SCRUM and Kanban).\nMain projects:\n- Management software development for a finance client (H14),linked with Bloomberg. All microservices run on AWS Elastic Beanstalk (PaaS)\n- Software development for TeamSystem's product AGYO(e-invoice). Docker microservices orchestrated by Kubernetes and CI with Jenkins. All resources on Azure\n- Timestamping proof on ETH blockchain (Solidity smart contracts), exposed through APIs limited by Azure API Gateway.\nMain languages: Java with Springboot, NodeJs, Grails (Groovy), Kotlin, ReactJs\nOther: FaaS both on AWS (Lambda) and Azure (Functions, LogicApp)"
            },
            {
                date: "2015 – 2016",
                title: "IT Consultant",
                company: "Indie Developer",
                description: "Requirements analysis and software development.\nMain projects:\n- Management Software (ERP) development for an important volunteering org (AVIS). NoSQL db used AWS DynamoDB\n- Prototyping for a 3d printing company.\nMain languages: Java with Play! Framework, JQuery and JS"
            },
            {
                date: "2014 – 2015",
                title: "Software Developer & Team Leader",
                company: "MetaJ Solution",
                description: "Leader of a team of 4. Requirements analysis and software development for payment services (PMPay project).\nAll services run on AWS IaaS (EC2 instances). SQL db used MYSQL with ORM\nMain languages: Java with Play! Framework, JQuery and JS"
            },
            {
                date: "2012 – 2014",
                title: "Software Developer",
                company: "ICT Service (MetaJ Solution)",
                description: "Software development and maintenance with Java and Struts Framework for banking and finance clients"
            }
        ],
        educations: [
            {   
                date: "2014",
                title: "ITIL Foundation",
                company: "APMG-International"
            },
            {   
                date: "2004 – 2010",
                title: "High School Diploma Perito Informatico",
                company: "ITIS Enea Mattei (SO)"
            },
        ],
        personalProjects: [
            {
                title: "Thook",
                link: "https://thook.altr.dev",
                description: "Simply receive notifications in Telegram. \nEntire Serverless project with Firebase Functions(Typescript), Firestore and Hosting"
            },
            {
                title: "Amazon Alexa",
                description:"Home assistant skills development.\nLanguage used: NodeJs"
            },
            {
                title: "Ho l’utility",
                link: "https://play.google.com/store/apps/details?id=com.filobot.houtility&hl=it",
                description: "Android app that allows Ho. Mobile users to have a widget on their homescreens. \nLanguage used: Kotlin. Unique users: 8.000"
            },
            {
                title: "Cesare Triaca",
                link: "http://cesaretriaca.com/",
                description: "Web site creation for a local artist with dynamic upload of pictures of his artwork taken from Dropbox.\nLanguages used: HTML5, JS"
            },
            {
                title: "Contraceptive Ring (inactive)",
                description: "Android app to track contraceptive ring usage.\nLanguage used: Java. Unique users: 49.000"
            },
            {
                title: "3D Printing",
                link: "https://www.thingiverse.com/altr_dev/about",
                description: "3d print DIY assembling on Josef Prusa model \nFew projects to be found on Thingiverse (altr_dev)"
            },
            {
                title: "TriggerT",
                description: "Little trigger that allows to take pictures when some particular events happens (thunderbolt, animals passing by, sudden noises, etc).\nBuilt on Arduino"
            },
            {
                title: "Home automation",
                description: "Automatic sunblinds movement depending on particular weather conditions such as wind, rain, direct sun, etc. The core is an Arduino which can be controlled through Android app."
            }
        ]
    }
};