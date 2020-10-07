import React from 'react';
import styles from './header.css';

export function Header({openedThread, bookmark}) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.centralContainer}>
        <div className={styles.logoContainer}>
          <img src={'https://www.flaticon.com/svg/static/icons/svg/1/1394.svg'} alt={'logo'}/>
        </div>
        <div className={styles.userContainer}>
          <img
            className={styles.avatarImg}
            src="https://copypast.ru/fotografii/foto_zhivotnih/jivotnye_v_obraze_znamenitostej_0_/jivotnye_v_obraze_znamenitostej_0_027.jpg"
            alt="avatar"
          />
          <a className={styles.avatarText} href={'#'}>User</a>
        </div>

      </div>
    </header>
  );
}





