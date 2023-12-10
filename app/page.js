'use client'
import React, { useState } from 'react';
import styles from './page.module.css';

import data from "../qa.json" assert { type: "json" };



const App = () => {
  const url = "https://script.google.com/macros/s/AKfycbyUJK5jAao0AmMRcEdTBTNgQQ1LUbsgwKtaCbdOKKU8Wrp81R8DZKtoWVLxzAb1UU0DKA/exec"

  return (
    <div className={styles.main}>
      <form method="post" action={url}>
        <div>
          {data.map(d =><>
            <div><h2 key={d.title}>{d.title}</h2><p>必須</p></div>
            <p><label htmlFor={d.id5}>{d.rank5}<input type="radio" id={d.id5} name={d.name} value={d.rank5} required/> </label></p>
            <p><label htmlFor={d.id4}>{d.rank4}<input type="radio" id={d.id4} name={d.name} value={d.rank4} required/> </label></p>
            <p><label htmlFor={d.id3}>{d.rank3}<input type="radio" id={d.id3} name={d.name} value={d.rank3} required/> </label></p>
            <p><label htmlFor={d.id2}>{d.rank2}<input type="radio" id={d.id2} name={d.name} value={d.rank2} required/> </label></p>
            <p><label htmlFor={d.id1}>{d.rank1}<input type="radio" id={d.id1} name={d.name} value={d.rank1} required/> </label></p>
          </>
          )}
        </div>
        <button id="submit-button" type="submit" >送信</button>
      </form>
      

      {/* // const [rating, setRating] = useState(0);
  // const [highRating, setHighRating] = useState(false);
  // const [halfRating, setHalfRating] = useState(false);
  // const [visible, setVisible] = useState(true);


  // const handleClick = (newRating) => {
  //   if (newRating === 0) {
  //     setHalfRating(false);
  //   } else if (newRating === 1) {
  //     setHalfRating(true);
  //   } else {
  //     setRating(newRating);
  //     setHighRating(newRating >= 4);
  //   }
  // }
  // const changeName = (e) => {
  //   setName(e.target.value);
  // }
  // const changeAnimal = (e) => {
  //   setAnimal(e.target.value);
  // }
  // const changeSex = (e) => {
  //   setSex(e.target.value);
  // }
      
      {visible
        ? <div>
            <div className={styles.card}>
              <p className={`${styles.card} ${styles.center}`}>本クリニックのサービスの満足度について５段階評価でご協力お願いします。</p>
              <div className={styles.center}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleClick(star)}
                    className={`${styles.star} ${star <= rating ? styles.gold : ''} ${halfRating ? styles.silver : ''}`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.center}>
              <button className={styles.button} onClick={() => setVisible(!visible)}>回答する</button>
            </div>
          </div>
        : <div>
            <div className={styles.center}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`${styles.star} ${star <= rating ? styles.gold : ''} ${halfRating ? styles.silver : ''}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            {highRating
              ?<div><Thanks/></div>
              :<div>ご協力ありがとうございました。</div>
            }
          </div>
      } */}
    </div>
  );
};

export default App;
