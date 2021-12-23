import React from 'react';

import Button from '../../components/Button';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Project from './Project';

import { Container } from './styles';

const Portfolio: React.FC = () => {
  return (
    <Container>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </Container>
  );
};

export default Portfolio;
