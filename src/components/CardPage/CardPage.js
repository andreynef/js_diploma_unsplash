import React from 'react';
import styles from './cardPage.css';
import {Link} from "react-router-dom";
import cross1 from '../../Icons/cross1.svg';
import cross2 from '../../Icons/cross2.svg';
import HeartIconPressed from "../../Icons/HeartIconPressed";
import HeartIconUnpressed from "../../Icons/HeartIconUnpressed";

export function CardPage({openedImage, open, pressed, likePhoto, setLikedId, likedId}) {
  const date = openedImage.created_at.slice(0,9);

  return (
    <div className={styles.cardPage}>
      <div className={styles.centralContainer}>
        <div className={styles.imageContainer}>
          <img
            src={openedImage.urls.regular}
            alt={openedImage.alt_description}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.metaContainer}>
            <div className={styles.authorContainer}>
              <img
                className={styles.avatarImg}
                src={openedImage.user.profile_image.small}
                alt="avatar"
              />
              <a className={styles.avatarText} href={openedImage.user.links.html}>{openedImage.user.first_name}</a>
            </div>
            <span className={styles.createdAt}>{date}</span>
          </div>
          <div className={styles.likesContainer}>
            <span className={styles.likesValue}>{openedImage.likes}</span>
            <button className={styles.button} onClick={()=>{console.log('btn is pressed')}}>
              {pressed? <HeartIconPressed/> : <HeartIconUnpressed/>}
            </button>
          </div>
        </div>
        <Link className={styles.exitButton} to={'/'} >
          <img src={cross1} alt={'exit'} className={styles.exitImgBlack}/>
          <img src={cross2} alt={'exit'} className={styles.exitImgWhite}/>
        </Link>
      </div>
    </div>
  )
}
