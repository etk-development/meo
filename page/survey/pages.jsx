import React, { useState } from "react";
import styles from "./survey.module.css"
import data from "app/qa.json" assert { type: "json" };

import Image from "next/image";
import topimage from "../../public/survey/top_img.jpg";


const url = "https://script.google.com/macros/s/AKfycbyg8tttTLbECBiXc0ZPdUN1MZ7oT3qupe1kZ5_HWUE_4mI7DBH3OZNPksPsC12CmoJf6A/exec"
          // https://script.google.com/macros/s/AKfycbyg8tttTLbECBiXc0ZPdUN1MZ7oT3qupe1kZ5_HWUE_4mI7DBH3OZNPksPsC12CmoJf6A/exec


const Survey =(props)=> {

    const handleInputChange = (event) => {
        const value = event.target.value;
        props.handleLastChange(value);
    };
    const handleTextareaChange = (event) => {
        const value = event.target.value;
        props.handleCommentChange(value);
    };

    async function handleSubmit (event) {
        event.preventDefault()
        // フォーム内データを取得する
        const formData = new FormData(event.target);
        const data = JSON.stringify(Object.fromEntries(formData))
        let dataObject = JSON.parse(data);
        console.log(data)
        // 非同期処理を実行する
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(Object.fromEntries(formData)),
            mode: "no-cors"
        })
        .then((response) => {
        // 非同期処理が成功した場合の処理
            if(dataObject.last>3){
                props.handleSubmitChange(true);
            }else{
                props.handleThanksChange(true);
            }
        })
        .catch((error) => {
        // 非同期処理が失敗した場合の処理
            props.handleSubmitChange(false);
        });
    };
    return (
        <div className={styles.container}>
            <Image src={topimage} alt="top" className={styles.topimage} />
            <form onSubmit={handleSubmit}>
                {data.map(d =>
                    <div key={d.title}  className={styles.section}>
                        <div key={d.title} className={styles.none}>
                            <h2  className={styles.section_text}>{d.title}</h2>
                            <p  className={styles.required}>必須</p>
                        </div>
                        <div className={styles.section_answer}>
                            {Object.entries(d.ranks).reverse().map(([key, value]) => (
                                <div key={key}>
                                    <label htmlFor={d.title+key} className={styles.choiceLabel}>
                                        <input 
                                            type="radio" 
                                            id={d.title+key} 
                                            name={d.name} 
                                            value={value} 
                                            required
                                        />
                                            {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div  className={styles.section}>
                    <div className={styles.none}>
                        <h2 className={styles.section_text}>全体の評価</h2>
                        <p className={styles.required}>必須</p>
                    </div>
                    <div  className={styles.section_answer}>
                        <div >
                            <label className={styles.choiceLabel} htmlFor="all5">
                                <input type="radio" id="all5"  name="last" value= "5" required onChange={handleInputChange}/>大変満足 
                            </label>
                        </div>
                        <div >
                            <label className={styles.choiceLabel} htmlFor="all4">
                                <input type="radio" id="all4"  name="last" value= "4" required onChange={handleInputChange}/>満足 
                            </label>
                        </div>
                        <div >
                            <label className={styles.choiceLabel} htmlFor="all3">
                                <input type="radio" id="all3"  name="last" value= "3" required onChange={handleInputChange}/>普通 
                            </label>
                        </div>
                        <div >
                            <label className={styles.choiceLabel} htmlFor="all2">
                                <input type="radio" id="all2"  name="last" value= "2" required onChange={handleInputChange}/>不満 
                            </label>
                        </div>
                        <div >
                            <label className={styles.choiceLabel} htmlFor="all1">
                                <input type="radio" id="all1"  name="last" value= "1" required onChange={handleInputChange}/>大変不満 
                            </label>
                        </div>
                    </div>
                </div>
                <div  className={styles.area_section}>
                    <div className={styles.none}>
                        <h2 className={styles.input_text_title}>「自由にコメント欄」※お気付きの点やご要望等、コメントをへお願い致します。</h2>
                        <p className={styles.required}>必須</p>
                    </div>
                    <div>
                        <textarea className={styles.input_text_area} id="comment"  name="comment"  rows="5" cols="33" onChange={handleTextareaChange}/>
                    </div>
                </div>
                <button id="submit-button" type="submit" className={styles.enquete_next_button}>送信</button>
            </form>
        </div>
    )
}

export default Survey