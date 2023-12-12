import styles from "./thanks.module.css"
import Image from "next/image";
import thanks from "../../public/thanks.svg";

const Thanks =()=> {

    return <div className={styles.container}>
                <div className={styles.title}>
                    <h1 >アンケート</h1>
                    <h1 >ありがとうございました。</h1>
                </div>
                <Image src={thanks} alt="thanks" className={styles.image} />
                <div className={styles.message}>
                    <h1>今後の運用に活用させていただきます。</h1>
                </div>
            </div>
}

export default Thanks