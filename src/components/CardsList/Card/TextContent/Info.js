import React from 'react';
import styles from './info.css';
import {MetaData} from "./MetaData/MetaData";



export function Info({created, profile, name, ava, description}) {

  return (
    <div className={styles.infoContainer}>
      <div className={styles.metaContainer}>
        <MetaData created={created} profile={profile} name={name} ava={ava}/>
      </div>
      {/*<h2 className={styles.titleContainer}>*/}
      {/*    {description}*/}
      {/*</h2>*/}
    </div>
  );
}
