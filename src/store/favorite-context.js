// context 추가
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites : [],
  totalFavorites: 0,
  addFavorite :(favoriteMeetup) => {}, // IDE 자동완성을 위해 추가 (참고)
  removeFavorite: (meetupId) => {},
  itemIsFavorite : (meetupId) => {}
}); // Javascript 객체

export function FavoritesContextProvider(props) { // 관심이 있는 컴포넌트에 컨텍스트를 제공함

  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFovorites) => {
      return prevUserFovorites.concat(favoriteMeetup); // 최신 상태의 스냅샷을 유지하기 위해 함수로 처리
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    })
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites : userFavorites,
    totalFavorites : userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };



  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>

}

export default FavoritesContext;