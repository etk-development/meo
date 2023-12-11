import styles from "./check.module.css"

const Check =(props)=> {

    const CheckTrueChange =(event)=> {
        event.preventDefault()
        props.handleCheckChange(true);
    };
    const CheckFalseChange =(event)=> {
        event.preventDefault()
        props.handleCheckChange(false);
        props.handleThanksChange(true);
    };

    return <div className={styles.container}>
            <h1 className={styles.title}>Googleアカウント（Gmailアドレス）</h1>
            <h1 className={styles.title}>をお持ちですか？</h1>
            <div className={styles.box}>
                <div><button className={styles.Ybutton} onClick={CheckTrueChange}>持っている</button></div>
            </div>
            <div className={styles.box}>
                <div><button className={styles.Nbutton} onClick={CheckFalseChange}>持っていない</button></div>
            </div>
        </div>
}

export default Check