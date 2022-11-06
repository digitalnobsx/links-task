import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Links from './pages/Links';
import Contact from './pages/Contact';
import MainNavigation from './components/MainNavigation';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact>
            <Links />
          </Route>
          <Route path="/Contact" exact>
            <Contact/>
          </Route>
          <Navigate to="/"/>
        </Routes>
      </main>
    </Router>
  );
};
export default App;
