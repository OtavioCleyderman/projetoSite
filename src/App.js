import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Home from './routed/Home'
import MaisVistos from './routed/MaisVistos'
import Lancamentos from './routed/Lancamentos'
import Descubra from './routed/Descubra'
import Cadastro from './routed/Cadastro'
import GlobalStyle from './styles/GlobalStyle';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mais-vistos" exact component={MaisVistos} />
          <Route path="/lancamentos" exact component={Lancamentos} />
          <Route path="/descubra" exact component={Descubra} />
          <Route path="/cadastro" exact component={Cadastro} />
        </Switch>
      </main>
      <Footer />

    </>

  )
}

export default App;