import Carousel from "react-multi-carousel";
import HeaderBlock from "../ui/HeaderBlock";
import { elements, responsive } from "../constants";
import CarouselElement from "../ui/CarouselElement";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  return (
    <section
      id="projects"
      className="container flex py-10 flex-col sm:gap-20 gap-10"
    >
      <HeaderBlock pereliv>Projects</HeaderBlock>
      <Carousel responsive={responsive}>
        {elements.map((e, id) => (
          <CarouselElement
            key={id}
            src={e.src}
            title={e.title}
            img={e.img}
            text={e.text}
            use={e.use}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Projects;
