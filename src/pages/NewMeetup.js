import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // POST HTTP 요청 전송하기

    fetch(
      "https://react-udemy-f4200-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        header: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/'); // /으로 이동한 후에 뒤로가기 할 수 없음
    })
    ; // 내장 javascript
  }
  return (
    <>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
