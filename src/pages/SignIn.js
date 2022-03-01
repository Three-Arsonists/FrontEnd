import { useState, useEffect, useCallback } from "react";
import styles from "./SignIn.module.css"
import { APISignUp } from '../utils/apis/auth';

function SignIn() {

    const [id, setId] = useState("");
    const [passWord, setPassWord] = useState("");
    const typeId = (event) => setId(event.target.value);
    const typePassWord = (event) => setPassWord(event.target.value);
    const [params ,setParams] = useState({});
    const { response, error, loading, ReqSignUp } = APISignUp();

    const onSignUp = useCallback(() => {
        console.log("CLICK !!!!!")
        setParams({userId : id, password : passWord, username: "jawoon", email :"test@test.co.kr", birth: "1993/12/04"})
    },[id, passWord]);
    
    useEffect(()=> {
        console.log("[AXIOS 요청] : ",response, error, loading)
    },[response,error,loading])

    useEffect(()=> {
        console.log("[onChange] : ",id, passWord)
    },[id,passWord])

    useEffect(()=> {
        console.log("[Param] : ", params)
        ReqSignUp(params);
    },[params])

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
        <button className={styles.btn} onClick={onSignUp}>회원가입</button>
        </div>
    </div>;
}

export default SignIn;