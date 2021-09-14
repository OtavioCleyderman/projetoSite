import React from 'react';

import { Container, Author, Company} from './styles';

function footer() {
  return (
      <Container>
          <p>Produzido por <Author href="https://github.com/OtavioCleyderman" target="_blank"> Otávio Cleyderman</Author> para <Company>Explorer Animes</Company></p>
          <p>Todos os direitos reservados ®2021</p>
      </Container>
  );
}

export default footer;
