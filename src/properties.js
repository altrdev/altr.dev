import { mdiLinkedinBox, mdiInstagram, mdiGithubCircle, mdiTwitter } from '@mdi/js'

let id = 0;
function createData(name, link) {
  id += 1;
  return { id, name, link };
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
        ]
    },
    content: {
        cv_link: "https://drive.google.com/file/d/1aQQRsodHn1qRlHcnAgElRyENFE-ydNF_/view?usp=sharing",
        labels: {
            download: "Download resume"
        }
    }
};