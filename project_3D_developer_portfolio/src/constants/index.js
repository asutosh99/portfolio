import {
  mobile,
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
  docker,
  meta,
  starbucks,
  nft_project,
  tesla,
  ICO_project,
  shopify,
  whiteList,
  DEX,
  threejs,
  mern
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "BlockChain Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer",
    company_name: "SyrenCloud",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Created Front end side of, Internal Data Management Tool to see all the Data related to the our client Johnson andJohnson, with edit and delete functionality, this allowed us to track who made the changes and when. Adding this feature,we saved time for manual use of Excel.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.JS Developer",
    company_name: "ALLD Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - jun 2022",
    points: [
      "Build cross-Browser compactable and accessibility compliant websites ,resulting 22% faster load time than industry",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Coordinated with 5 developer from requirements definition to user designs and features using JavaScript and React.JS ,reducing reporting bug about over 25%",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Mavetic Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Responsible for constructing web Pages and provide them links to navigate..",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Nft Market Place",
    description:
      "Introducing a unique platform where users can mint their very own Crypto Dev NFT's. With the intention of keeping the NFT's rare and exclusive, only 20 of them will exist and each one will be unique.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Next",
        color: "pink-text-gradient",
      },
    ],
    image: nft_project,
    source_code_link: "https://github.com/asutosh99/nft-collection-frontEnd",
  },
  {
    name: "Inicial Coin Offering",
    description:
      "CD tokens are a unique digital asset built on the Ethereum blockchain with a maximum supply of just 10,000 tokens. As part of our special offer, Crypto Dev NFT holders will receive 10 free CD tokens (with gas fees applied).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: ICO_project,
    source_code_link: "https://github.com/",
  },
  {
    name: "WhiteList User",
    description:
      "new blockchain application that features whitelisted access for the first 10 users who sign up - completely free!   I've also created a website using frontend framework Next.js, where people can go and enter themselves into the whitelist. Finally, I hosted it on Vercel so it is faster than ever!.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: whiteList,
    source_code_link: "https://github.com/",
  },
  {
    name: "Decentralized Exchange",
    description:
      " Built an exchange with only one asset pair (Eth / Crypto Dev), take a fee of 1% on swaps When user adds liquidity, they are given Crypto Dev LP tokens (Liquidity Provider tokens)",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
      {
        name: "HardHat",
        color: "blue-text-gradient",
      },
    ],
    image: DEX,
    source_code_link: "https://github.com/asutosh99/Decentralized_Exchange",
  },
  {
    name: "Social media WebApp",
    description:
      "it is MERN stack Application having CRUD operations in the post with user authentication ",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaSricpt",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "  https://github.com/asutosh99/mernStackApplication/tree/master",
  },
 

];

export { services, technologies, experiences, testimonials, projects };
