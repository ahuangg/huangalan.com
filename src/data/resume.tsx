import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
    name: "Alan Huang",
    initials: "AH",
    url: "https://huangalan.com/",
    location: "New York City, NY",
    locationLink: "https://www.google.com/maps/place/newyorkcity",
    description:
        "Software Developer with a strong interest in exploring and developing with cutting-edge technologies. Currently diving deep into programming languages and databases.",
    summary: "",
    avatarUrl: "https://avatars.githubusercontent.com/u/98438095?v=4",
    skills: [
        "Python",
        "Typescript",
        "Go",
        "Java",
        "C#",
        "AWS",
        "Git",
        "CI/CD",
        "Docker",
        "React.js",
        "Node.js",
        "Java Spring",
        "MongoDB",
        "Postgres",
        "Prisma",
        "Jest",
        "Mockito",
        "Unity",
    ],
    navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/ahuangg",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/huang-alan/",
                icon: Icons.linkedin,

                navbar: true,
            },
            Resume: {
                name: "Resume",
                url: "https://drive.google.com/file/d/1itiheOjoHhgtbRYBrSJZ8d-UsLReJpmK/view?usp=sharing",
                icon: Icons.download,

                navbar: true,
            },
            Email: {
                name: "Send Email",
                url: "mailto:ahuang7840@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "Amazon",
            href: "https://merch.amazon.com/",
            badges: [],
            location: "Seattle, WA",
            title: "Software Development Engineer Intern",
            logoUrl: "https://logo.clearbit.com/amazon.com",
            start: "May 2023",
            end: "August 2023",
            description:
                "At Amazon Merch on Demand, I designed and implemented the infrastructure for a self-service SKU management tool utilizing AWS, streamlining inventory operations for over 30 stakeholders.",
        },
        {
            company: "Stony Brook University",
            badges: [],
            href: "https://www.stonybrook.edu/",
            location: "Stony Brook, NY",
            title: "Undergraduate Researcher",
            logoUrl: "https://logo.clearbit.com/stonybrook.edu",
            start: "August 2022",
            end: "November 2022",
            description:
                "As an Undergraduate Researcher at Stony Brook University, I collaborated with the bioinformatics team to develop a genomic visualization platform using JavaScript and Plotly.",
        },
        {
            company: "Platinum Edge Tutoring",
            href: "https://www.platinumedgetutoring.com/",
            badges: [],
            location: "Remote",
            title: "Software Engineer Intern",
            logoUrl: "https://logo.clearbit.com/platinumedgetutoring.com",
            start: "June 2022",
            end: "August 2022",
            description:
                "During my internship at Platinum Edge Tutoring, I created a comprehensive EdTech platform using the MERN stack, promoting collaboration among students.",
        },
    ],
    education: [
        {
            school: "Georgia Institute of Technology",
            href: "https://www.gatech.edu/",
            degree: "M.S. Computer Science, Computing Systems",
            logoUrl: "https://logo.clearbit.com/gatech.edu",
            start: "2024",
            end: "2025",
        },
        {
            school: "CodePath",
            href: "https://www.codepath.org/",
            degree: "Advanced Software Engineering, CodePath IOS Development",
            logoUrl: "https://logo.clearbit.com/codepath.org",
            start: "2022",
            end: "2024",
        },
        {
            school: "Stony Brook University",
            href: "https://www.stonybrook.edu/",
            degree: "B.S. Computer Science",
            logoUrl: "https://logo.clearbit.com/stonybrook.edu",
            start: "2021",
            end: "2023",
        },
    ],
    projects: [
        {
            title: "Spots Explorer",
            href: "https://spots-blond.vercel.app/",
            dates: "November 2024 - December 2024",
            active: true,
            description:
                "Web application for visualizing programming languages popularity with real user data and data scraped from github.",
            technologies: [
                "Typescript",
                "Go",
                "Python",
                "Next.js",
                "Mapbox",
                "Supabase",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://spots-blond.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "App Source",
                    href: "https://github.com/ahuangg/spots",
                    icon: <Icons.github className="size-3" />,
                },
                {
                    type: "Go Source",
                    href: "https://github.com/ahuangg/github-crawler",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://github.com/user-attachments/assets/dea61ade-b7ca-429b-ad68-8b0edc8d36ed",
        },
        {
            title: "ML-Based Trading System",
            href: "https://drive.google.com/file/d/1hTbgV811PXxaBRnXOGVlzt_aYO99Ig3T/view?usp=sharing",
            dates: "August 2024 - November 2024",
            active: true,
            description:
                "Developed an ML-based trading system using random forest with bagging, which outperformed benchmark by 32% on out of sample trades.",
            technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
            links: [
                {
                    type: "Paper",
                    href: "https://drive.google.com/file/d/1hTbgV811PXxaBRnXOGVlzt_aYO99Ig3T/view?usp=sharing",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "https://github.com/user-attachments/assets/29afe791-b4b3-4d6e-997e-db0cd9aea975",
            video: "",
        },
        {
            title: "Raven",
            href: "https://github.com/ahuangg/redistricting-analysis-application",
            dates: "August 2023 - December 2023",
            active: true,
            description:
                "District analysis application built for students, researchers and politician.",
            technologies: [
                "Typescript",
                "Python",
                "SeaWulf",
                "React.js",
                "Java Spring",
                "MongoDB",
                "Tremor UI",
                "TailwindCSS",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/ahuangg/redistricting-analysis-application",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "https://github.com/ahuangg/redistricting_analysis_application/assets/98438095/a9fb7bd1-5f6a-4179-9b5e-9e1443679e85",
            video: "",
        },
        {
            title: "Monster Mashup",
            href: "https://github.com/ahuangg/3d-rpg-platformer",
            dates: "August 2024 - November 2024",
            active: true,
            description:
                "A 3D RPG platformer set in a medieval fantasy world, developed using Unity. It includes essential features like collision detection, AI-controlled enemies, custom platforms, audio integration, and a combat system.",
            technologies: ["C#", "Unity"],
            links: [
                {
                    type: "Release",
                    href: "https://github.com/ahuangg/3d-rpg-platformer/releases/tag/v1.0.0",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/ahuangg/3d-rpg-platformer",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "",
            video: "https://github.com/user-attachments/assets/3148fc3a-ba5a-46bf-8b64-9e226b730a04",
        },
    ],
    hackathons: [
        {
            title: "SBUHacks 2024",
            dates: "February 10th - 11th, 2024",
            location: "Stony Brook, New York",
            description:
                "Developed an AI-powered chatbot to help users select outfits for specific occasions.",
            image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/759/004/datas/medium.jpg",
            mlh: "",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/wear-me",
                },
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/ahuangg/sbuhacks2024",
                },
            ],
        },
        {
            title: "SBUHacks 2022",
            dates: "September 23th - 25th, 2022",
            location: "Stony Brook, New York",
            description:
                "Developed an application for scheduling volunteer shifts in local parks.",
            image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/208/475/datas/medium.png",
            mlh: "",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/when2clean",
                },
            ],
        },
        {
            title: "JP Morgan Code for Good - 2022",
            dates: "September 17th - 18th, 2024",
            location: "Manhattan, New York",
            description:
                "Developed an onboarding application to facilitate mentor sign-ups and offer incentives for retention.",
            image: "https://play-lh.googleusercontent.com/Gn63lcwuTLoKg9QSoMha6xxqdUM33R6u3zKmgYbG6j9POfkKBLfkjoBuRXzZjtD1wUg",
            mlh: "",
            links: [],
        },
        {
            title: "StuyHacks VIII",
            dates: "June 16th - 17th, 2019",
            location: "Manhattan, New York",
            description:
                "Created a browser game to raise awareness about climate change, where players navigate through Earth, journey into space, and engage in terraforming Mars.",
            icon: "public",
            image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/000/652/662/datas/medium_square.png",
            links: [],
        },
        {
            title: "HackMann",
            dates: "June 2nd - June 3rd, 2019",
            location: "Bronx, New York",
            description:
                "Developed a web application that utilizes machine learning to enhance users' understanding of US political parties.",
            image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/000/810/579/datas/medium.png",
            links: [],
        },
        {
            title: "TeenHacks LI - Spring 2019",
            dates: "May 25th - 26st, 2018",
            location: "Long Island, New York",
            description:
                "Developed an Edtech application designed for focused learning.",
            image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/000/810/629/datas/medium.png",
            links: [],
        },
    ],
} as const;
