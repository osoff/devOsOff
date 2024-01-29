export const navLink = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contacts", href: "#contacts" },
];
export const linksOutside = {
  telegram: "tg://resolve?domain=osoff",
  gmail: "mailto:anatolywebdev@gmail.com",
  linkedin: "https://www.linkedin.com/in/anatoly-isupov-b6baa8286/",
  github: "https://github.com/osoff",
};

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};
export const elements = [
  {
    title: "OsOff Shop",
    img: "img/shop.png",
    text: "Shop application with favorites, products list, card",
    src: "https://osoff.github.io/niketail/",
    use: ["TailwindCss", "React Router Dom", "Context Api"],
  },
  {
    title: "Fast-Pizza",
    img: "img/pizza.png",
    text: "An application that uses advanced tools",
    src: "https://osoff.github.io/fast-react-pizza/",
    use: ["Redux", "Redux Toolkit", "React Router Dom", "TailwindCss"],
  },
  {
    title: "Booking",
    img: "img/booking.png",
    text: "An application that allows you to manage hotel rooms Login:test@example.com Pass:qwe12345. Version in development",
    src: "https://65a09b50191d1466338213e7--lambent-lily-4a99d3.netlify.app/cabins",
    use: [
      "Styled Components",
      "React Router Dom",
      "React Query",
      "Supabase",
      "Context Api",
    ],
  },
  {
    title: "SearchFilms",
    img: "img/film.png",
    text: "An application for finding movies with the addition of the viewed section. Implemented the addition of a rating.",
    src: "https://osoff.github.io/usepopcorn/",
  },
];
