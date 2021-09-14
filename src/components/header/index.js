import React from 'react';
import bannerDesktop from "../../images/AnimesDesktop.png"
import { Link } from 'react-router-dom'

import { Container, Img, NavMenu, Ul, Li } from './styles';

function header() {
  return (
    <Container>
      <Img src={bannerDesktop} alt="Banner Animes" className="bannerDesktop" />
      <NavMenu>
        <Ul>
          <Li> <Link style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }} to='/'> Home </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }} to='/mais-vistos'> Mais vistos </Link> </Li>
          <Li> <Link style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }} to='/lancamentos'> Lançamentos </Link></Li>
          <Li> <Link style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }} to='/descubra'> Descubra </Link></Li>
          <Li> <Link style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }} to='/cadastro'> Cadastro </Link> </Li>
        </Ul>
      </NavMenu>
    </Container>
  )
}

export default header;