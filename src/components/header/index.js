import React from 'react';
import bannerDesktop from "../../images/AnimesDesktop.png"

import { Container, Img, NavMenu, Ul, Li, Link} from './styles';

function header() {
  return (
      <Container>
            <Img src={bannerDesktop} alt="Banner Animes" className="bannerDesktop"/>
            <NavMenu>
                    <Ul>
                        <Li> <Link href="#Home"> Home </Link> </Li>
                        <Li> <Link href="/mais-vistos"> Mais vistos </Link> </Li>
                        <Li> <Link href="/lancamentos"> Lançamentos </Link></Li>
                        <Li> <Link href="/categorias"> Descubra </Link></Li>
                        <Li> <Link href="/cadastro"> Cadastro </Link> </Li>
                    </Ul>
            </NavMenu>
      </Container>
  )
}

export default header;