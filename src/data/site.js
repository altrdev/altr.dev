import { siLinkedin, siInstagram, siGithub, siX } from 'simple-icons';

export const site = {
    url: "https://altr.dev",
    title: "Alessandro Travi – Software Engineer | altr.dev",
    description: "Official site of Alessandro Travi aka altrdev. I’m a software engineer always willing to put myself out there and push myself beyond my limits.",
    handle: "altrdev"
};

export const profile = {
    name: "Alessandro Travi",
    role: "Crazy Software Engineer",
    tagline: "Backend, cloud infrastructure and AI consulting, plus IoT and 3D printing projects.",
    birthDate: "1990-04-09",
    location: "Como Lake, Italy",
    email: "info@altr.dev",
    about: [
        "I’m a software engineer who is always eager to step outside my comfort zone and push myself beyond my limits.",
        "After graduating from high school, while working as a postman, I began challenging myself with personal side projects and freelance consulting.",
        "I’m not entirely sure what it means to be a 'self-starter,' but people tend to call me that."
    ],
    links: [
        { label: "GitHub", href: "https://github.com/altrdev/", path: siGithub.path },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/alessandrotravi/en", path: siLinkedin.path },
        { label: "Instagram", href: "https://www.instagram.com/alessandro.travi/", path: siInstagram.path },
        { label: "X", href: "https://twitter.com/altrdev", path: siX.path }
    ]
};

export const services = [
    {
        title: "Backend & APIs",
        description: "Reliable backend systems and APIs built with Node.js or Java/Kotlin and Spring Boot. Serverless or containerized, on AWS and Azure, with SQL and NoSQL data stores.",
        tags: ["Node.js", "Java", "Kotlin", "Spring Boot", "Serverless", "MongoDB", "DynamoDB"]
    },
    {
        title: "AI consulting",
        description: "Working out where AI actually fits in your product or workflow: use cases, integration with existing backends, and pragmatic prototypes before any big commitment.",
        tags: ["Use cases", "Integration", "Prototypes"]
    },
    {
        title: "Infrastructure as Code",
        description: "Repeatable cloud infrastructure you can version, review and rebuild. Terraform, CloudFormation and CDK, with CI/CD and container setups around them.",
        tags: ["Terraform", "CloudFormation", "CDK", "AWS", "Azure", "Docker"]
    },
    {
        title: "IoT & 3D printing",
        description: "From Arduino prototypes to home automation: sensors, triggers, remote control apps and custom 3D-printed parts to bring them into the real world.",
        tags: ["Arduino", "Home automation", "3D printing"]
    }
];

export const titles = {
    services: "What I do",
    about: "About",
    contact: "Get in touch",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Side projects"
};

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
            title: "Brezza",
            link: "https://brezza.altr.dev/",
            badge: "New",
            description: "Battery-powered Zigbee vibration sensor that tells your smart home when the wind is shaking the awning. Works with Home Assistant.\nBuilt on ESP32-H2 and a LIS2DW12 accelerometer, with a custom PCB and a 3D-printed enclosure. Firmware in Arduino C++."
        },
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
            title: "3D Printing",
            link: "https://makerworld.com/it/@semuda/upload",
            description: "A few of my 3D printing projects are published on MakerWorld."
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
