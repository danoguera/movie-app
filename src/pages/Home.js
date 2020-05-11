import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
  } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Movie Menu</h1>
    <ul>
        <li><Link to='/NowPlaying'>Now Playing</Link> </li>
        <li><Link to='TopRated'>Top Rated</Link> </li>
        <li><Link to='Popular'>Popular</Link></li>
        <li><Link to='Upcoming'>Upcoming</Link> </li>
    </ul>
  </div>
)

export default Home;