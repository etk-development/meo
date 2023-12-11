import styles from "./thanks.module.css"

const Thanks =()=> {
    return <div className={styles.container}>
                <div className={styles.title}>
                    <h1 >アンケート</h1>
                    <h1 >ありがとうございました。</h1>
                </div>
                <div className={styles.message}>
                    <h1>今後の運用に活用させていただきます。</h1>
                </div>
            </div>
}

export default Thanks