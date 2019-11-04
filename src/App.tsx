import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Section from './components/layout/Section';
import Footer from './components/layout/Footer';
import './css/App.css';
import IndexPage from './pages/IndexPage';
import Page01 from './pages/page/Page01';
import Page02 from './pages/page/Page02';
import Page03 from './pages/page/Page03';

const App: FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Section>
          <Switch>
            <Route path="/page/Page03" component={Page03} />
            <Route path="/page/Page02" component={Page02} />
            <Route path="/page/Page01" component={Page01} />
            <Route exact path="/" component={IndexPage} />
          </Switch>
        </Section>
      </Main>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/">
          <Nav />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
