import React from 'react';
import { Container, CardContainer } from './styles';
import Card from 'react-bootstrap/Card'
import seirei from '../../images/seirei.jpg'
import ushio from '../../images/ushio.jpg'
import expelled from '../../images/expelled.jpg'
import orange from '../../images/orange.jpg'

function Descubra() {
  return (
    <Container>
      <h2>Descubra animes, não tão populares, mas de qualidade</h2>
      <CardContainer>
        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={seirei} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Seirei no Moribito</Card.Title>
            <Card.Text>
              Conta a cruzada de uma guerreira chamada Balsa, uma guarda-costas que trabalha para salvar vidas em busca do perdão de seus pecados, e do jovem Chagum, o segundo príncipe do Império de Yogo. Quando o imperador ordena o a execução secreta do príncipe, seu próprio filho de quem acredita ter sido possuído por um demônio antigo, a imperatriz contrata Balsa pra ser sua guarda-costas.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={ushio} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Ushio to Tora</Card.Title>
            <Card.Text>
              Ushio to Tora é um anime que segue a lógica “shounen clássico”. Ou seja, é aquele que você bate o olho já sabe de que gênero é. Seu estúdio responsável é o mesmo de Dororo e Banana Fish.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={expelled} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Expelled from Paradise</Card.Title>
            <Card.Text>
              Em 2700 a terra é um planeta devastado e a maioria da população passou a viver em um mundo virtual (DEVA) cujo servidor fica no espaço. Angela Balzac, uma investigadora desse mundo, é mandada a terra para rastrear de onde veio um sinal hacker que invadiu e roubou informações do servidor de DEVA. Chegando a terra, Angela encontra com um agente terráqueo contratado e juntos vão investigar e descobrir quem e porque DEVA foi invadida. Mas a resposta não vai ser exatamente o que eles esperam…
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', margin: '0.8rem' }}>
          <Card.Img variant="top" src={orange} style={{ width: '18rem' }} />
          <Card.Body>
            <Card.Title style={{ fontWeight: 'bold', textAlign: 'center' }}>Orange</Card.Title>
            <Card.Text>
              Naho recebe, no primeiro dia de aula, uma carta enviada por si mesma 10 anos no futuro. A princípio, ela ignora totalmente o conteúdo do bilhete, que alertava sobre alguns supostos acontecimentos que levariam a uma tragédia! Após perceber que a carta é real, Naho começa a seguir todas as indicações escritas por ela mesma no futuro na tentativa de salvar o seu amigo Kakeru Naruse de um destino horrível.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardContainer>
    </Container>

  );
}

export default Descubra;