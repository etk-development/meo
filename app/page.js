'use client'
import React, { useState } from 'react';
import Thanks from './thanks/page';
import styles from './page.module.css'



const App = () => {
  const [rating, setRating] = useState(0);
  const [highRating, setHighRating] = useState(false);
  const [halfRating, setHalfRating] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClick = (newRating) => {
    if (newRating === 0) {
      setHalfRating(false);
    } else if (newRating === 1) {
      setHalfRating(true);
    } else {
      setRating(newRating);
      setHighRating(newRating >= 4);
    }
  };


  return (
    <div className={styles.main}>
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
      }
    </div>
  );
};

export default App;
