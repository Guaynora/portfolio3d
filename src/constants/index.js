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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  hypernova,
  soluprime,
  gutaku,
  todolist,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Junior",
    company_name: "Hypernova Labs",
    icon: hypernova,
    iconBg: "#383E56",
    date: "Noviembre 2021 - Enero 2022",
    points: [
      "Desarrollo y mantenimiento de la aplicación con React Native",
      "Proyecto bajo la metodología SCRUM",
      "Trabajo en equipo",
    ],
  },
  {
    title: "Practicante Frontend",
    company_name: "soluPrime",
    icon: soluprime,
    iconBg: "#E6DEDD",
    date: "Enero 2022 - Abril 2022",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web usando Next.js",
      "Optimización del sitio web de la empresa",
      "Mantenimiento de aplicaciones móviles con React Native",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "soluPrime",
    icon: soluprime,
    iconBg: "#383E56",
    date: "Julio 2022 - Actualmente",
    points: [
      "Desarrollo y mantenimiento de aplicaciones webs y móviles con Next.js y React Native",
      "Participación estrecha con clientes para el desarrollo de nuevas funcionalidades",
      "Implementación de diseño adaptable asegurando la compatibilidad entre navegadores..",
      "Participación en revisión de código y compartir retroalimentación con otros desarrolladores",
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
    name: "Gutaku",
    description:
      "Sitio web que permite buscar y obtener información sobre animes como los capitulos recien estrenados, animes top según su categoria.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bulma ui",
        color: "pink-text-gradient",
      },
    ],
    image: gutaku,
    source_code_link: "https://github.com/Guaynora/gutaku",
  },
  {
    name: "Todo List",
    description:
      "Aplicación web desarrollada puramente con javascript. Permite iniciar sesión con google y github y la creación y eliminación de tareas.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css", 
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/Guaynora/todo_list",
  },
];

export { services, technologies, experiences, testimonials, projects };
