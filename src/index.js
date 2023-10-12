import './styles/index.css';
import './images/MovieLogo-1.png';

import displayMovies from './modules/displayMovies.js';
import getMovies from './modules/api.js';

const displayAllMovies = async () => {
  const display = await getMovies();

  displayMovies(display);
};

window.addEventListener('load', displayAllMovies);