import classes from './Card.module.css'


// 래퍼 컴포넌트 생성하기
export default function Card(props) {
  return <div className={classes.card}>
    {props.children} 
  </div>
}