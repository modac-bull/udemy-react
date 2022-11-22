// 상단 네비
import { useContext } from 'react';

import {Link} from 'react-router-dom'

import classes from './MainNavigation.module.css'; // css에 작성한 클래스들이 classes의 property가 된다.

import FavoritesContext from '../../store/favorite-context';

export default function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext)
  return( 
  <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites
          <span className={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
        </li>
      </ul>
    </nav>
  </header>)
}