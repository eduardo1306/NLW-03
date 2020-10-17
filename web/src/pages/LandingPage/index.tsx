import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';
import { Container, Content, Location } from './styles';

import logoImg from '../../images/logo.svg';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <Location>
          <strong>Espírito Santo</strong>
          <span>Vila Velha</span>
        </Location>
        <Link to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Content>
    </Container>
  );
};

export default LandingPage;
