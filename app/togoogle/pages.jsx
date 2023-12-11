import styles from "../page.module.css"

const Togoogle =(props)=> {
    const copyToClipboard=()=>{
        const copyTarget = props.comment;
        console.log(props.comment)
        navigator.clipboard.writeText(copyTarget)
    }
    return <>
            <h1>よろしければGoogleの口コミへの投稿にもご協力お願いします！</h1>
            <a href="https://g.page/r/CYoe7IHifsqcEB0/review">
                <button onClick={copyToClipboard} className={styles.button}>
                    コメントをコピーしてレビュー。
                </button>
            </a>
    </>
}

export default Togoogle