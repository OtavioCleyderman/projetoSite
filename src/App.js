import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Home from './routed/Home'
import GlobalStyle from './styles/GlobalStyle';

// mport { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer/>
    </>
    
  )
}

export default App;





