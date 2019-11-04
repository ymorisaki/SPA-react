import React, { FC, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Section from './components/layout/Section';
import Footer from './components/layout/Footer';
import './css/App.css';
import './css/transition.css';
import IndexPage from './pages/IndexPage';
import Page01 from './pages/page/Page01';
import Page02 from './pages/page/Page02';
import Page03 from './pages/page/Page03';

interface RouteType {
  name: string;
  path: string;
  Component: FC;
}

const Routes: RouteType[] = [
  { name: 'IndexPage', path: '/', Component: IndexPage},
  { name: 'Page01', path: '/page/Page01', Component: Page01},
  { name: 'Page02', path: '/page/Page02', Component: Page02},
  { name: 'Page03', path: '/page/Page03', Component: Page03}
];

const App: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Nav />
      <Main>
        <Section>
          {Routes.map(({ path, Component }) => (
            <Route exact path={path} key={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page-item"
                  unmountOnExit
                >
                  <div className="page-item">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
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
