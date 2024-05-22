import * as React from "react";
import { VStack, IconButton } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import './FullScreenSection.css'; // Assurez-vous d'importer le fichier CSS

const FullScreenSection = ({ children, isDarkBackground, showScrollIcon, ...boxProps }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps} position="relative">
        {children}
        {showScrollIcon && (
          <IconButton
            icon={<FontAwesomeIcon icon={faArrowCircleDown} />}
            size="lg"
            variant="unstyled"
            aria-label="Scroll Down"
            className="scroll-down-icon"
            onClick={handleScrollDown}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
