import * as React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "HTML CSS JS",
    description: "J'ai travaillé avec plaisir sur le site web pour Ninetech pour le hackathon en utilisant HTML, CSS et JavaScript. Il s'agissait d'un travail de groupe de cinq personnes dont je faisais partie.",
    url: "https://siteninetech.onrender.com/",
    getImageSrc: () => require("../images/photo1.png"),
  },
  {
    title: "HTML CSS JS",
    description: "Project Inval",
    url: "https://brahmahamadou.github.io/EnvalIntra-CodeLoccol/",
    getImageSrc: () => require("../images/photo2.png"),
  },
  {
    title: "Photo Gallery",
    description: "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    url: "https://github.com/Brahmahamadou/photo-gallery",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description: "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    url: "https://github.com/Brahmahamadou/event-planner",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1E1E1F"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      showScrollIcon={true} // Affichez l'icône de défilement
    >
      <Heading as="h1" id="projects-section" color="white">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, minmax(0, 1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
