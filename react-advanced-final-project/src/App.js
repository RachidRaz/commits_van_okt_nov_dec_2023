import React from 'react';
import Routes from './components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header met Add Event-link */}
        <header>
          <nav>
            <Link to="/add-event">Add Event</Link>
          </nav>
        </header>

        {/* Routes-component */}
        <Routes />
      </div>
    </Router>
  );
};

export default App;
