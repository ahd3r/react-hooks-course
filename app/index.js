import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeContext } from './utils/context';
import Nav from './components/Nav';
import Loading from './components/Loading';

import './index.css';



const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

function App() {
  const [theme, setTheme] = React.useState('light');
  const contextValue = {
    theme,
    changeTheme: () => setTheme((theme) => theme = theme === 'light' ? 'dark' : 'light')
  };

  // try to set param to component in route
  // try to consume context via useContext hook in the not provided component
  return (
    < Router >
      <ThemeContext.Provider value={contextValue}>
        <div className={`container ${theme}`}>
          <Nav />
          <React.Suspense fallback={<Loading />} >
            <Switch>
              <Route exact path='/' component={Popular} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </React.Suspense>
        </div>
      </ThemeContext.Provider>
    </Router >
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
