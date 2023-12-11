'use client'
import React, { useState } from 'react';
import styles from './page.module.css';


import Survey from './survey/pages';
import Thanks from './thanks/page';
import Check from './check/pages';
import Togoogle from './togoogle/pages';



const App = () => {

  // 総合評価
  const [last, setLast] = useState("");
  const [comment, setComment] = useState("");
  const [completeSubmit, setCompleteSubmit] = useState(false);
  const [check, setCheck] = useState(false);
  const [thanks, setThanks] = useState(false);

  const handleLastChange = (newValue) => {
    setLast(newValue);
  };
  const handleCommentChange = (newValue) => {
    setComment(newValue);
  };
  const handleSubmitChange = (newValue) => {
    setCompleteSubmit(newValue);
  };
  const handleCheckChange = (newValue) => {
    setCheck(newValue);
  };

  const handleThanksChange = (newValue) => {
    setThanks(newValue);
  };



  return (
    <div className={styles.main}>
      {thanks
        ? <>
          <Thanks />
        </>
        : <>
            {completeSubmit 
              ? <>
                  {check 
                    ? <Togoogle comment={comment}/>
                    : <Check 
                      handleCheckChange={handleCheckChange}
                      handleThanksChange={handleThanksChange}
                    />
                  }
                </>
              : <Survey
                handleLastChange={handleLastChange}
                handleSubmitChange={handleSubmitChange}
                handleCommentChange={handleCommentChange}
                handleThanksChange={handleThanksChange}
              />
            }
          </>
      }
    </div>
  );
};

export default App;
