import React from 'react';
import Card from 'react-bootstrap/Card'
import AttackOnTitan from '../../images/attack-on-titan.jpg'
import JujutsuKaisen from '../../images/jujutsu-kaisen.jpg'
import Boruto from '../../images/boruto.jpg'
import OnePiece from '../../images/OnePiece.jpg'

import { Container, CardContainer } from './styles';

function MaisVistos() {
  return (
    <Container>
      <h2>Os animes mais vistos</h2>
      <CardContainer>
        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={AttackOnTitan} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Attack On Titan</Card.Title>
            <Card.Text>
              Há anos surgiu o maior inimigo da humanidade. Os titãs, como são chamados as criaturas gigantescas que aparentemente não tem inteligência e só vivem para uma coisa: comer, e claro, comer humanos.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={JujutsuKaisen} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Jujutsu Kaisen</Card.Title>
            <Card.Text>
              Sofrimento, arrependimento, vergonha: os sentimentos negativos dos humanos tornam-se Maldições, causando terríveis acidentes que podem levar até mesmo à morte. E pra piorar, Maldições só podem ser exorcizadas por outras Maldições.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={Boruto} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Boruto</Card.Title>
            <Card.Text>
              Uzumaki Boruto, filho de Uzumaki Naruto, o Sétimo Hokage, se inscreveu na Academia Ninja para aprender a ser um verdadeiro ninja. Os outros estudantes o ignoram por ser “apenas o filho do Hokage”, mas a paixão e a personalidade do Boruto vai acabar com todos esses preconceitos.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={OnePiece} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>One Piece</Card.Title>
            <Card.Text>
              Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger. Capturado e condenado à execução pelo Governo Mundial, suas últimas palavras lançaram legiões aos mares. “Meu tesouro? Se quiserem, podem pegá-lo.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </Container>

  );
}

export default MaisVistos;