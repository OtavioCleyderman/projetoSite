import React from 'react';

import { Container, Form, Input, Address, Button, Label, ContainerForm } from './styles';

function Cadastro() {
  return (
    <Container>
      <ContainerForm>
        <h2>Cadastre-se e receba notícias, curiosidades, brindes e informações sobre animes</h2>
        <Form action="#">
          <label htmlFor="">Nome</label>
          <Input type="text" />
          <label htmlFor="">E-mail</label>
          <Input type="email" />
          <label htmlFor="">Telefone</label>
          <Input type="number" />
          <Address>
            <Label htmlFor="">Endereço</Label>
            <Input type="text" />
            <Label htmlFor="">Número</Label>
            <Input type="number" />
            <Label htmlFor="">CEP</Label>
            <Input type="number" />
          </Address>
          <Button type="submit">Cadastrar</Button>
        </Form>

      </ContainerForm>

    </Container>

  );
}

export default Cadastro;