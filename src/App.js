import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import Home from './pages/Home';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import NotFound from './pages/NotFound';
import Upcoming from './pages/Upcoming';

const NavBar = () => (
  <nav>
    <Link to='/'> Home</Link>
    <Link to='/NowPlaying'>Now Playing</Link>
    <Link to='/Popular'>Popular</Link>
    <Link to='/TopRated'>Top Rated</Link>
    <Link to='/Upcoming'>Upcoming</Link>
  </nav>
)

function App() {
  return (
    <div className="App">
      <Router >
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/NowPlaying" component={NowPlaying} />
          <Route exact path="/Popular" component={Popular} />
          <Route exact path="/Upcoming" component={Upcoming} />
          <Route exact path="/TopRated" component={TopRated} />
          {/* <Redirect exact from="*" to="/" /> */}
          <Route path="*" component={NotFound} />
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
