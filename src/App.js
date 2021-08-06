import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
