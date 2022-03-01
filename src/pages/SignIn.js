import {useState, useEffect} from "react";
import styles from "./SignIn.module.css"
import { SignUpUser } from "../utils/apis/auth" 

function SignIn() {

    const [id, setId] = useState("");
    const [passWord, setPassWord] = useState("");
    const typeId = (event) => setId(event.target.value);
    const typePassWord = (event) => setPassWord(event.target.value);
    const singUp = () => {
        const { response, error, loading } = SignUpUser({userId : id, password : passWord, username: "jawoon", email :"test@test.co.kr", birth: "1993/12/04"});
        console.log(response, error, loading)

    }

    return <div className={styles.loginform}>
        <div className={styles.container}>
        <label>아이디</label>
        <input className={styles.inputbox} value={id} onChange={typeId} type="text"/>
        </div>
        <div className={styles.container}>
        <label>비밀번호</label>
        <input className={styles.inputbox} value={passWord} onChange={typePassWord} type="text"/>
        </div>
        <div className={styles.container}>
        <label className={styles.alarm}>Message</label>
        </div>
        <div className={styles.container}>
        <button className={styles.btn}>로그인</button>
        <button className={styles.btn} onClick={singUp}>회원가입</button>
        </div>
    </div>;
}

export default SignIn;