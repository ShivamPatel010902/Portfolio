// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import cpp from "./assets/images/Skills/c++.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import expressjs from "./assets/images/Skills/express.png";
import tailwindcss from "./assets/images/Skills/tailwind.png";
import materialui from "./assets/images/Skills/material.png";
import gitandgiyhub from "./assets/images/Skills/gitgithub.png";
import boostrap from "./assets/images/Skills/boostrap.png";
import arduino from "./assets/images/Skills/arduino.png";
import sanity from "./assets/images/Skills/sanity.png";
import vite from "./assets/images/Skills/vite.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
import project6 from "./assets/images/projects/img6.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookSquare } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "MERN Developer",
    firstName: "SHIVAM",
    LastName: "PATEL",
    btnText: "Download CV",
    image: Hero_person,
    hero_content: [
      {
        count: "2",
        text: "Years of Experinse in MERN development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "MongoDB",
        para: "MongoDB is a document database",
        li1: "MongoDB Atlas is a multi-cloud database service. Get Started",
        li2: "Create an Atlas Account",
        li3: "Deploy a Free Cluster",
        li4: "Add Your Connection IP Address to Your IP Access List",
        li5: "Create a Database User for Your Cluster",
        li6: "Connect to Your Cluster",
        li7: "Insert and View a Document",
        li8: "https://www.mongodb.com/",
        logo: mongodb,
      },
      {
        name: "Express js",
        para: "Fast, unopinionated, minimalist web framework for Node.js",
        li1: "Fast, unopinionated, minimalist web framework for Nodejs. Get Started",
        li2: "Installing:",
        li3: `
        1. $ mkdir myapp
        2. $ cd myapp
        3. $ npm init
        4. $ npm install express`,
        li4: "Hello world example:",
        li5: `const express = require('express')
        const app = express()
        const port = 3000
        
        app.get('/', (req, res) => {
          res.send('Hello World!')
        })
        
        app.listen(port, () => {
          console.log('Example app listening on port ${'port'}')
        })`,
        li6: "Run the app with the following command:",
        li7: "$ node app.js",
        li8: "https://expressjs.com/",
        logo: expressjs,
      },
      {
        name: "React js",
        para: "A JavaScript library for building user interfaces",
        li1: "Add React to a Website",
        li2: "Step 1: Add a DOM Container to the HTML:",
        li3: `<div id="like_button_container"></div>`,
        li4: "Step 2: Add the Script Tags:",
        li5: `<script src="https://unpkg.com/react@18/umd/react.development.js" 
        crossorigin></script>
              <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" 
              crossorigin></script>
              <script src="like_button.js"></script>
              </body>`,
        li6: "Step 3: Create a React Component:",
        li7: `const domContainer = document.querySelector('#like_button_container');
        const root = ReactDOM.createRoot(domContainer);
        root.render(e(LikeButton));`,
        li8: "https://reactjs.org/",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Node.js is a JavaScript runtime environment.",
        li1: "Node.js® is an open-source, cross-platform JavaScript runtime environment. Get Started",
        li2: "Download Node.js",
        li3: "Create a Node.js file named myfirst.js, and add the following code",
        li4: `var http = require('http');

        http.createServer(function (req, res) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end('Hello World!');
        }).listen(8080);`,
        li5: "Save the file on your computer: C:\Users\Your Name\myfirst.js",
        li6: "Start your command line interface, write node myfirst.js and hit enter",
        li7: "https://nodejs.org/en/download/",
        li8: "https://nodejs.org/en/",
        logo: nodejs,
      },
      {
        name: "Tailwind css",
        para: "Tailwind CSS is an open source CSS framework.",
        li1: "Rapidly build modern websites without ever leaving your HTML. Get Started",
        li2: `Install Tailwind CSS
        Install tailwindcss via npm, and create your tailwind.config.js file.`,
        li3: `npm install -D tailwindcss
        npx tailwindcss init`,
        li4: `Configure your template paths
        Add the paths to all of your template files in your tailwind.config.js file.`,
        li5: `Add the Tailwind directives to your CSS
        Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.`,
        li6: `Start the Tailwind CLI build process
        Run the CLI tool to scan your template files for classes and build your CSS.`,
        li7: `Start using Tailwind in your HTML
        Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.`,
        li8: "https://tailwindcss.com/",
        logo: tailwindcss,
      },
      {
        name: "Material ui",
        para: "Material UI is an open-source React component library",
        li1: "React components for faster and easier web development. Get Started",
        li2: `Installation:`,
        li3: `1. npm install @material-ui/core 2. yarn add @material-ui/core`,
        li4: "Quick Start:",
        li5: `import React from 'react';
        import ReactDOM from 'react-dom';
        import Button from '@material-ui/core/Button';
        
        function App() {
          return (
            <Button variant="contained" color="primary">
              Hello World
            </Button>
          );
        }
        
        ReactDOM.render(<App />, document.querySelector('#app'));`,
        li6: "https://v4.mui.com/components/",
        li7: "https://v4.mui.com/customization",
        li8: "https://v4.mui.com/",
        logo: materialui,
      },
      {
        name: "Git & GitHub",
        para: "Git is a version control system & GitHub is the largest host of source code",
        li1: "Get Started",
        li2: "You can download Git for free from the following website: https://www.git-scm.com/",
        li3: "To start using Git, we are first going to open up our Command shell.",
        li4: `The first thing we need to do, is to check if Git is properly installed: 1. git --version`,
        li5: `Configure Git: 1. git config --global user.name "your user name" 2. git config --global user.email "your email"`,
        li6: `Creating Git Folder: 1. mkdir myproject 2. cd myproject`,
        li7: `Initialize Git: 1. git init`,
        li8: "https://docs.github.com/en/get-started/using-git/about-git",
        logo: gitandgiyhub,
      },
      {
        name: "C++",
        para: "C++ is a high-level general-purpose programming language",
        li1: "C++ is a general-purpose programming language and is widely used nowadays for competitive programming.",
        li2: "It has imperative, object-oriented and generic programming features.",
        li3: " C++ runs on lots of platforms like Windows, Linux, Unix, Mac etc.",
        li4: "https://www.geeksforgeeks.org/introduction-to-c-programming-language/?ref=lbp",
        li5: "https://www.geeksforgeeks.org/setting-c-development-environment/?ref=lbp",
        li6: "https://www.geeksforgeeks.org/c-programming-basics/?ref=lbp",
        li7: "https://www.geeksforgeeks.org/c-plus-plus/",
        li8: "https://www.geeksforgeeks.org/c-plus-plus/",
        logo: cpp,
      },
      {
        name: "Arduino",
        para: "Electronic prototyping platform to create interactive electronic objects",
        li1: "Open-source electronic prototyping platform enabling users to create interactive electronic objects.",
        li2: "Getting Started with Arduino products",
        li3: "Code online on the Arduino Web Editor",
        li4: "Install the Arduino Desktop IDE",
        li5: "Learn Arduino",
        li6: "Arduino Education",
        li7: "General Care - Cleaning Your Board",
        li8: "https://www.arduino.cc/",
        logo: arduino,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "1. Types of Websites & Web Applications: 1.1 Corporate 1.2 Portfolio 1.3 Portals 1.4 Ecommerce. 2. Web development support and maintenance",
        logo: services_logo1,
      },
      {
        title: "Electronics Projects",
        para: "1. Drones 2. Home Atomation 3. Parking System 4. Arduino projects 5. Node MCU projects",
        logo: services_logo2,
      },
      {
        title: "Designing & Editing",
        para: "1. Video Editing 2. Photo Editing 3. Thumbnail Designing 4. Poster Making 5. Logo Designing ",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Social Medial Website",
        description:"Facebook Clone using HTML, CSS & JavaScript",
        image: project1,
      },
      {
        title: "Google Search Engine",
        description:"Goolge Clone using Reactjs, Redux & Rpaid Api",
        image: project3,
      },
      {
        title: "Memories",
        description:"Image Sharing Plateform Reactjs & Sanity",
        image: project2,
      },
      {
        title: "Auth System",
        description:"Login system using MongoDB, Expressjs, Reactjs & Nodejs",
        image: project4,
      },
      {
        title: "EMS",
        description:"Employee Management system using MongoDB, Expressjs, Reactjs & Nodejs",
        image: project5,
      },
      {
        title: "E-Commerce Website",
        description:"E Commerce Website using MongoDB, Expressjs, Reactjs & Nodejs",
        image: project6,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Honestly, I possess all the skills and experience that you’re looking for. I’m pretty confident that I am the best candidate for this Project. So Hire Me",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Mail",
        icon: GrMail,
        link: "mailto:mrdeveloper4911@gmail.com",
      },
      {
        text: "WhatsApp",
        icon: FaWhatsapp,
        link: "https://wa.me/9685760802",
      },
      {
        text: "Instragram",
        icon: BsInstagram,
        link: "https://www.instagram.com/shivampatel3199/",
      },
      {
        text: "GitHub",
        icon: FaGithub,
        link: "https://github.com/ShivamPatel010902",
      },
      {
        text: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/shivampatelmrss/",
      },
      {
        text: "Facebook",
        icon: FaFacebookSquare,
        link: "https://www.facebook.com/ElectronicShala",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
