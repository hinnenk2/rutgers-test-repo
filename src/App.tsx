import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Footer from './components/Footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HOME_PATH, SKILLS_PATH, PORTFOLIO_PATH } from "./pathnames";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005176',
    },
    secondary: {
      main: '#acd7eb',
    },
  },
});

// Entry point - Portfolio App and Routes
function App() {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <main>
            <Switch>
              <Route exact path={HOME_PATH} component={Home} />
              <Route exact path={SKILLS_PATH} component={Skills} />
              <Route exact path={PORTFOLIO_PATH} component={Portfolio} />
              <Route component={Home} />
            </Switch>
          </main>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
