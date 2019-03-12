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
        skills: "Skill"
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
        ]
    }
};