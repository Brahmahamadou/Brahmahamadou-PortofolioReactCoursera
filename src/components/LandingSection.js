import { Avatar, Heading, VStack, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import mhdImage from '../photo/mhd.jpg'; 

const greeting = 'Je suis Mahamadou Moussa Brah!';
const bio1 = 'Développeur Web spécialisé dans des technologies telles que HTML, CSS,';
const bio2 = 'Bootstrap, JavaScript, React pour le Frontend et Node.js pour le Backend.';
const bio3 = 'Je suis également blogueur et titulaire une licence en Communication.';

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1E1E1F"
  >
    <VStack spacing={16}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src={mhdImage}
          size="2xl"
          name="Vlad Krasovsky"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={4} alignItems="center">
        <Text fontSize="lg" textAlign="center">
          {bio1}
        </Text>
        <Text fontSize="lg" textAlign="center">
          {bio2}
        </Text>
        <Text fontSize="lg" textAlign="center">
          {bio3}
        </Text>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
