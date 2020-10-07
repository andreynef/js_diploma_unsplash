import React from 'react';
import styles from './likesCounter.css';
import HeartIconPressed from "../../../../../Icons/HeartIconPressed";
import HeartIconUnpressed from "../../../../../Icons/HeartIconUnpressed";

export function LikesCounter({likes, pressed, setLikedId}) {
  return (
    <div className={styles.likesCounter}>
      <span className={styles.likesValue}>{likes}</span>
      <button className={styles.button} onClick={()=>{console.log('btn is pressed')}}>
        {pressed? <HeartIconPressed/> : <HeartIconUnpressed/>}
      </button>
    </div>
  );
}
