import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    mysql,
    express,
    C,
    DSA,
    
    accenture,
    travmax,
   
    uiet,
    carrent,
    jobit,
    tripguide,
    cryptomate,
    yt,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: C
    },
    {
      name :"Data Structures",
      icon : DSA
    },
    
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql
    },
    
    {
      name: "Express Js",
      icon: express
    },
   
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company_name: "Travmax",
      icon: travmax,
      iconBg: "#fff",
      date: "June 2023 - Aug 2023",
      points: [
        "Led CodeIgniter-based end-to-end frontend development, enhancing performance and creating captivating UI/UX designs at Travmaxholidays.",
        "Expertly integrated PHP and MySQL, optimizing data dynamics and ensuring seamless website functionality.",
        "Orchestrated comprehensive manual testing of backend and frontend, safeguarding superior user experiences and site robustness.",
       
      ],
    },
    {
      title: "Product Design Trainee",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Nov 2022",
      points: [
        "Innovatively crafted musiK player UI/UX with lyrical integration using FIGMA during Product Design Traineeship at Accenture.",
        "Formulated comprehensive design rationale, providing insights for informed decision-making and future design iterations.",
        "Seamlessly collaborated with teams, ensuring alignment with design vision and delivering impactful user-centric solutions.",
        
      ],
    },
    {
      title: "University Institute of Engineering and Technology",
      company_name: "B.E Electronics and Communication",
      icon: uiet,
      iconBg:"#fff",
      date:"Aug 2019 - Jun 2023",
      points :[]
    }
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Shashank proved me wrong.",
      name: "Sasank",
      designation: "CEO",
      company: "Sudama Aushdhalya",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Sasank does.",
      name: "Akhil",
      designation: "Directer",
      company: "Travmax",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Sasank optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "Designer",
      company: "Trav",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "You-Tube",
      description:
        "Experience ad-free, high-quality YouTube video streaming on our responsive YouTube Clone. Utilizing Rapid API, enjoy seamless content without interruptions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapid Api",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: yt,
      hosted_link : "https://shorturl.at/muFNR",
      source_code_link: "https://github.com/Shashankkumar26/My-Youtube",
    },
    {
      name: "Chatify",
      description:
        "A dynamic messaging solution powered by Socket.io and Node.js. Seamlessly connect with individuals or groups, experiencing responsive design for effortless communication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Socket.io",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
       
      ],
      image: jobit,
      hosted_link:"",
      source_code_link: "https://github.com/Shashankkumar26/Chat-app",
    },
    {
      name: "Cryptomate",
      description:
        "Your gateway to real-time cryptocurrency prices and expert mentorship. Seamlessly connect, learn, and track on any device with full responsiveness.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Calendly",
          color: "pink-text-gradient",
        },
      ],
      image: cryptomate,
      hosted_link:"https://projectcryptomate.netlify.app/",
      source_code_link: "https://github.com/Shashankkumar26/CryptoMate",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };