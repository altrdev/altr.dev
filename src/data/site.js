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
        title: "AI-assisted development",
        description: "Building software faster with AI coding assistants without losing control of the result: spec-driven workflows with OpenSpec, requirements agreed before code, and small reviewable changes. Plus consulting on where AI really fits in your product or team.",
        tags: ["OpenSpec", "Spec-driven", "AI coding", "Consulting"]
    },
    {
        title: "Infrastructure as Code",
        description: "Repeatable cloud infrastructure you can version, review and rebuild. Terraform, CloudFormation and CDK, with CI/CD and container setups around them.",
        tags: ["Terraform", "CloudFormation", "CDK", "AWS", "Azure", "Docker"]
    },
    {
        title: "Home Assistant & home automation",
        description: "Custom smart home projects built around Home Assistant: integrations, custom panels and dashboards, Zigbee devices and automations tailored to how you actually live.",
        tags: ["Home Assistant", "Zigbee", "Custom panels", "Automations"]
    },
    {
        title: "IoT & 3D printing",
        description: "From Arduino and ESP32 prototypes to finished devices: sensors, triggers, remote control apps and custom 3D-printed parts to bring them into the real world.",
        tags: ["Arduino", "ESP32", "3D printing"]
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
        download: "View resume"
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
            description: "Battery-powered Zigbee sensor that tells Home Assistant when the wind is shaking your awning.\nESP32-H2, custom PCB, 3D-printed enclosure."
        },
        {
            title: "Basecamp-UI",
            link: "https://basecamp-ui.altr.dev",
            description: "A custom UI for Home Assistant, built as a custom panel instead of Lovelace."
        },
        {
            title: "Thook",
            link: "https://thook.altr.dev",
            description: "Simply receive notifications in Telegram. \nEntire Serverless project with Firebase Functions(Typescript), Firestore and Hosting"
        },
        {
            title: "Torchio",
            link: "https://github.com/altrdev/torchio",
            description: "Break your containers on purpose: burn CPU, hold memory, fill disk and add latency on demand over HTTP.\nFor testing autoscaling, limits, OOM kills and probes. Docker image included."
        },
        {
            title: "Ed25519",
            link: "https://ed25519.altr.dev/",
            description: "Verify and create Ed25519 signatures right in the browser. Everything runs client-side, nothing is uploaded.\nTypeScript, Preact and Vite."
        },
        {
            title: "3D Printing",
            link: "https://makerworld.com/it/@semuda/upload",
            description: "A few of my 3D printing projects are published on MakerWorld."
        }
    ]
}