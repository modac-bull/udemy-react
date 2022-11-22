/**
 * 
 * @returns 재사용 가능한 함수형 컴포넌트 실습
 */

import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

export default function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false); // hook

  // standard JS 작성 방식
  function deleteHandler() {
    console.log('clicked');
    console.log(props.text); // reusable
    setModalIsOpen(true); 
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler}/> }
    </div>
  );
}
