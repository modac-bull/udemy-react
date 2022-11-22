import { useState, useEffect } from 'react'
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading]  = useState(true); // 로딩 상태
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    // API 데이터 요청
    fetch(
      "https://react-udemy-f4200-default-rtdb.firebaseio.com/meetups.json"
    ).then((response) => {
      return response.json();
    }).then(data => {

      // 중요! 데이터 페칭하는 과정 복습
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
      console.log(data)
    });
  }, []); // 두번째 인제 dependency [] 1회 렌더링시에만 실행됨

  if(isLoading) {
    return <section>
      <p>Loading ... </p>
    </section>
  } 

  return (
    <>
      <h1> All Meetups Page </h1>
      <MeetupList meetups={loadedMeetups} />
    </>
  );
}
