import * as React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description: "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    url: "https://github.com/Brahmahamadou/react-space",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description: "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    url: "https://github.com/Brahmahamadou/react-infinite-scroll",
    getImageSrc: () => require("../images/photo2.jpg"),
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
