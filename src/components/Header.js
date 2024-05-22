import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Box, HStack, Text } from '@chakra-ui/react';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto:mahamadoubrah672@gmail.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Brahmahamadou',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/mahamadou-moussa-brah-824735267/',
  },
  {
    icon: faTwitter,
    url: 'https://x.com/MahamadouBrah67',
  },
  {
    icon: faFacebook,
    url: 'https://www.facebook.com/mahamadou.moussabrah',
  },
  {
    icon: faPhone,
    number: '+22792004099',
  },
];

const Header = ({ onShowAbout, onShowBlog }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = 'translateY(0)';
      } else {
        headerElement.style.transform = 'translateY(-200px)';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor, showSection) => (e) => {
    e.preventDefault();
    if (showSection) {
      showSection();
    }
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      width="100%"
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={headerRef}
      backgroundColor="#18181b"
      zIndex={1000} // Assurez-vous que le header reste au-dessus des autres contenus
    >
      <Box color="white" maxWidth="100%" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                social.number ? (
                  <HStack key={index} spacing={2}>
                    <FontAwesomeIcon icon={social.icon} size="lg" />
                    <Text fontSize="xl" color="white">
                      {social.number}
                    </Text>
                  </HStack>
                ) : (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                )
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#about" onClick={handleClick('about', onShowAbout)}>
                About
              </a>
              <a href="#projects" onClick={handleClick('projects')}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick('contactme')}>
                Contact Me
              </a>
              <a href="#blog" onClick={handleClick('blog', onShowBlog)}>
                Blog
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
