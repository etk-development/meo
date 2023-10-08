'use client'
import React, { useState } from 'react';
import Thanks from './thanks/page';

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
    <div>
      {visible
        ? <>
            <p>本クリニックのサービスの満足度について５段階評価でご協力お願いします。</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleClick(star)}
                style={{
                  cursor: 'pointer',
                  color: star <= rating ? 'gold' : 'gray',
                  ...(halfRating && { color: 'silver' }),
                }}
              >
                &#9733;
              </span>
            ))}
            {/* <p>Rating: {rating} stars</p> */}
            <button onClick={() => setVisible(!visible)}>回答する</button>
          </>
        : <>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  cursor: 'pointer',
                  color: star <= rating ? 'gold' : 'gray',
                  ...(halfRating && { color: 'silver' }),
                }}
              >
                &#9733;
              </span>
            ))}
            {highRating
              ?<div><Thanks/></div>
              :<div>ご協力ありがとうございました。</div>
            }
          </>
      }
    </div>
  );
};

export default App;
