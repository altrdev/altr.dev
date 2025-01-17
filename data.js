import { siLinkedin, siInstagram, siGithub, siX } from 'simple-icons';

let id = 0;
function createData(label, value) {
  id += 1;
  return { id, label, value };
}

export const info = {
    title: "altr.dev - Alessandro Travi Software Developer",
    footer: " - altrdev"
}

export const titles = {
    aboutMe: "About Me",
    contacts: "Contacts",
    experience: "Professional Experience",
    education: "Education",
    skills: "Skills",
    projects: "Side Projects"
}

export const floatingIntro = {
    name: "Alessandro Travi",
    workTitle: "Crazy Software Engineer",
    description: "I’m a software engineer who is always eager to step outside my comfort zone and push myself beyond my limits.\nAfter graduating from high school, while working as a postman, I began challenging myself with personal side projects and freelance consulting.\nI’m not entirely sure what it means to be a 'self-starter,' but people tend to call me that.",
    icons: [
        createData(siLinkedin.path, "https://www.linkedin.com/in/alessandrotravi/en"),
        createData(siGithub.path, "https://github.com/altrdev/"),
        createData(siInstagram.path, "https://www.instagram.com/alessandro.travi/"),
        createData(siX.path, "https://twitter.com/altrdev")
    ],
    tableRows: [
        createData("BirthDate", "09/04/1990"),
        createData("Location", "Como Lake, Italy"),
        createData("Email", "info@altr.dev"),
        createData("Website", "https://altr.dev")
    ]
}

export const content = {
    labels: {
        download: "Download resume"
    },
    skills: {
        proficient: "Node.js, Java, Kotlin, Springboot, Next.js, Serverless, AWS, Terraform, CloudFormation, MongoDB, DynamoDB, Docker",
        comfortable: "React.js, Python, Azure, CDK, Solidity, Flutter",
        familiar: "Vue.js, Angular, Go, Swift"
    },
    workExperience:[
        {
            date: "2021 – Present",
            title: "Full-Stack Developer",
            company: "Freelance",
            description: "Freelance consulting"
        },
        {
            date: "2019 – 2021",
            title: "DevOPS Engineer",
            company: "Claranet CH",
            description: "Requirements analysis and DevOps development. Create IaC infrastructure with Terraform, Cloudformation and CDK. \nWorking on Serverless Projects(AWS and Azure) and Flutter mobile application"
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
            title: "Ed25519",
            link: "https://github.com/altrdev/ed25519-verify",
            description: "Simple webapp for checking Ed25519 elliptic curve signing algorithm. \nLanguage used: Typescript on SvelteJs Framework"
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
            title: "Contraceptive Ring (inactive)",
            description: "Android app to track contraceptive ring usage.\nLanguage used: Java. Unique users: 49.000"
        },
        {
            title: "3D Printing",
            link: "https://www.printables.com/it/@altrdev",
            description: "3d print DIY assembling on Josef Prusa model \nFew projects to be found on Printables (altrdev)"
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
