import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import BlogSection from "./components/BlogSection";

function App() {
  // État pour suivre si la section de blog doit être affichée
  const [showBlogSection, setShowBlogSection] = useState(false);

  // Fonction pour afficher la section de blog lors du clic sur le lien "Blog"
  const handleShowBlogSection = () => {
    setShowBlogSection(true);
  };

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header onShowBlog={handleShowBlogSection} />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
          {/* Affichez la section de blog uniquement si showBlogSection est true */}
          {showBlogSection && <BlogSection />}
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
