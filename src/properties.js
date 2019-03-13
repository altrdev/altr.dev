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
        skills: "Skills"
    },
    floatingIntro: {
        name: "Alessandro Travi",
        workTitle: "Crazy Software Engineer",
        description: "I’m a software engineer always willing to put myself out there and push myself beyond my limits.\nRight after high school diploma, while working as postman, I started challenging myself with both personal side-projects and freelance consulting.\nI'm not sure what being a 'self starter' means, but people tends to call me that.",
        icons: [
            createData(mdiLinkedinBox, "https://www.linkedin.com/in/alessandrotravi/?locale=en_US"),
            createData(mdiGithubCircle, "https://github.com/altrdev/"),
            createData(mdiInstagram, "https://www.instagram.com/alessandro.travi/"),
            createData(mdiTwitter, "https://twitter.com/altrdev")
        ],
        tableRows: [
            createData("Age", 29),
            createData("Country", "Como Lake, Italy"),
            createData("Email", <Obfuscate email="alessandro.travi+dev@gmail.com"/>),
            createData("Website", "https://altr.dev")
        ]
    },
    content: {
        cv_link: "https://drive.google.com/file/d/1aQQRsodHn1qRlHcnAgElRyENFE-ydNF_/view?usp=sharing",
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
                date: "2016 – now",
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
        ]
    }
};