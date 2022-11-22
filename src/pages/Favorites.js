import { useContext } from "react";

import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content ;

  if(favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content =  <MeetupList meetups={favoritesCtx.favorites} />
  }
  return (
    <>
      <h1>My Favorite</h1>
      {content}
    </>
  )
}