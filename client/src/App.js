import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ThemePage from './pages/ThemePage';
import ChatPage from './pages/ChatPage';
import TimerPage from './pages/TimerPage';
import TaskPage from './pages/TaskPage';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/themes" component={ThemePage} />
            <Route path="/chat" component={ChatPage} />
            <Route path="/timer" component={TimerPage} />
            <Route path="/tasks" component={TaskPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;