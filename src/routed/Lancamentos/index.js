import React from 'react';
import Card from 'react-bootstrap/Card'
import { Container, CardContainer } from './styles';
import Mushoku from '../../images/Mushoku.jpg'
import JoJo from '../../images/JoJo.jpg'
import oitomeia from '../../images/86.jpg'
import Kimetsu from '../../images/Kimetsu.jpg'

function Lancamentos() {
  return (
    <Container>
      <h2>Os lançamentos que sairão em breve </h2>
      <CardContainer>
        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={Mushoku} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season
            </Card.Title>
            <Card.Text>
              Segunda temporada de Mushoku Tensei saíra em breve, ainda sem data confirmada mas previsto para até o final do ano.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={JoJo} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>JoJo no Kimyou na Bouken Part 6: Stone Ocean
            </Card.Title>
            <Card.Text>
              Previsão para sair em Dezembro a série, na Netflix, com previsão de lançamentos de 4 episodes por mês.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={oitomeia} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>86 2nd Season</Card.Title>
            <Card.Text>
              Segunda temporada para sair já, previsão de qualidade semelhante a temporada anterior.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={Kimetsu} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Kimetsu no Yaiba: Yuukaku-hen</Card.Title>
            <Card.Text>
              Segunda temporada desse anime incrível está para sair, tão aguardada que o hipe está nas alturas. Dando continuidade aos eventos do filme, expectativa realmente alta para essa segunda temporada.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </Container>

  );
}

export default Lancamentos;