import styles from "./tiogoogle.module.css"

const Togoogle =(props)=> {
    const copyToClipboard=()=>{
        const copyTarget = props.comment;
        console.log(props.comment)
        navigator.clipboard.writeText(copyTarget)
    }
    return <div className={styles.container}>
                <div className={styles.title}>
                    <h1 >アンケート</h1>
                    <h1 >ありがとうございました。</h1>
                    {/* <p className={styles.id}>回答日時：　,回答ID：</p> */}
                </div>

                <div className={styles.message}>
                    <p >よろしければ</p>
                    <p >Googleの口コミへの投稿にも</p>
                    <p >ご協力お願いします！</p>
                </div>

                <div className={styles.card}>
                    <h1>ボタンを押すと、「自由にコメント欄」</h1>
                    <h1>の内容がコピーされます。</h1>
                    <a href="https://g.page/r/CYoe7IHifsqcEB0/review">
                        <button onClick={copyToClipboard} className={styles.button}>
                            コピーしてGoogleへ
                        </button>
                    </a>
                    <p  className={styles.id}>ボタンを押すとGoogleアカウントページに移動します。口コミ欄で内容をペースト（貼り付け）してご利用ください。</p>
                </div>

                <div className={styles.message}>
                    <h1>Googleアカウントページに</h1>
                    <h1>進んだ後のステップです。</h1>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>「この場所での自分の体験や感想を共有しましょう」部分をタップ</h1>
                    </div>
                    <div>
                        <h1 className={styles.contents}>*画像が入ります*</h1>
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>入力欄を長押しして「ペースト」が表示されたらタップ</h1>
                    </div>
                    <div>
                        <h1 className={styles.contents}>*画像が入ります*</h1>
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>テキストがペーストされたら「完了」をタップ</h1>
                    </div>
                    <div>
                        <h1 className={styles.contents}>*画像が入ります*</h1>
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>★（星）をタップ</h1>
                    </div>
                    <div>
                        <h1 className={styles.contents}>*画像が入ります*</h1>
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>選択肢があれば、ご感想に一番近しいタグを選んでタップ</h1>
                    </div>
                    <div>
                        <h1 className={styles.contents}>*画像が入ります*</h1>
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>画面、右上にある「投稿」をタップしたら完了です</h1>
                    </div>
                    <div>
                        <h1 className={styles.contents}>*画像が入ります*</h1>
                    </div>
                </div>

                <div className={styles.message}>
                    <h1>さっそく</h1>
                    <h1>GoogleページへGO!</h1>
                </div>

                <div className={styles.card}>
                    <h1>ボタンを押すと、「自由にコメント欄」</h1>
                    <h1>の内容がコピーされます。</h1>
                    <a href="https://g.page/r/CYoe7IHifsqcEB0/review">
                        <button onClick={copyToClipboard} className={styles.button}>
                            コピーしてGoogleへ
                        </button>
                    </a>
                    <p className={styles.id}>ボタンを押すとGoogleアカウントページに移動します。口コミ欄で内容をペースト（貼り付け）してご利用ください。</p>
                </div>
        </div>
}

export default Togoogle