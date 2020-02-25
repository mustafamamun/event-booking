import React from 'react';
import { Container } from 'react-bootstrap';
import Routes from './routes/routes';
import Menu from './components/NavMenu/Menu';

const App: React.FC = () => {
  return (
    <div id="App">
      <Menu
        pageWrapId={'body'}
        outerContainerId={'App'}
        className="text-center"
      />
      <Container id="body">
        <Routes />
      </Container>
    </div>
  );
};

export default App;
