import React from 'react';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import { GlobalStyles } from './styles/GlobalStyle';

function App() {
  return <>
    <Header/>
    <Portfolio/>

    <GlobalStyles />
  </>
}

export default App;
