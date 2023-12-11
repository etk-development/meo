import styles from "../page.module.css"

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

    return <>
            <h1>Googleアカウント（Gmailアドレス）をお持ちですか？</h1>
            <div>
                <div><button onClick={CheckTrueChange}>持っている</button></div>
            </div>
            <div>
                <div><button onClick={CheckFalseChange}>持っていない</button></div>
            </div>
    </>
}

export default Check