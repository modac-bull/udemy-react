import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

export default function App() {
  // localhost:3000
  // 참고 최신6버전에서는 Switch 사용되지 않음...! 참고정도만 하자

  return <div>
    <Layout>
      <Switch >
        <Route path='/' exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup"> 
          <NewMeetupPage />
        </Route>
        <Route path="/favorites"> 
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
    
  </div>;
}