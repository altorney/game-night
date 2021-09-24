import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Content from 'components/main/main';
import Maintenance from 'components/Maintenance/maintenance';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Content />
          </Route>
          <Route path="/maintenance">
            <Maintenance />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
