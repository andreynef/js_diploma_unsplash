import React from 'react';
import styles from './cardList.css';
import {Card} from "./Card/Card";
import loader from '../../Icons/Gear.gif'

export function CardList({add,images, getImageObj, pressed, setPressed, setLikedId}) {
  let allCardsArr;
  if (images.length === 0) {
      allCardsArr=<img src={loader} alt={'loader'}/>
  } else {
    allCardsArr = images.map((item, i) => {
      return (
          <Card
            key={item.id}
            id={item.id}
            created={item.created_at}
            name={item.user.first_name}
            profile={item.user.links.html}
            likes={item.likes}
            url={item.urls.thumb}
            ava={item.user.profile_image.small}
            description={item.alt_description}
            getImageObj={getImageObj}
            // className ={styles.card}
            pressed={pressed}
            setPressed={setPressed}
            setLikedId={setLikedId}
          />
      )
    })}

    return (
      <main className={styles.mainContainer}>
        <section className={styles.centralContainer}>
          <ul className={styles.cardList}>
            {allCardsArr}
          </ul>
        </section>
        <button
          className={styles.button}
          type="button"
          onClick={add}
        >
          Загрузить еще
        </button>
      </main>
    )
}
