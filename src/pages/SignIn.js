import { useState, useEffect, useCallback } from "react";
import styles from "./SignIn.module.css"
import { APISignUp } from '../utils/apis/auth';

function SignIn() {

    const [id, setId] = useState("");
    const [passWord, setPassWord] = useState("");
    const typeId = (event) => setId(event.target.value);
    const typePassWord = (event) => setPassWord(event.target.value);
    
    // 1. auth.js의 APISignUp 호출한다 
    const { response, error, loading, ReqSignUp } = APISignUp();
    const [params, setParams] = useState();
    
    const onSignUp = useCallback(() => {
        console.log("CLICK !!!!!")
        ReqSignUp(params);
    },[params]);
    
    // [시나리오 1] : axios 응답 결과 로그 
    // useEffect(() => {
    //     console.log("[AXIOS 응답 결과] : ", response, error, loading)
    // },[response, error, loading])

    // [시나리오 2] : axios payload 파라미터 인자 확인 로그 
    // useEffect(() => {
    //     console.log("[PARAMS] : ", params)
    // },[params])

    useEffect(() => {
        console.log("[onChange] : ", id, passWord)
        let today = new Date();
        setParams({userId : id, password : passWord, username: "jawoon", email :"test@test.co.kr", birth: today})
    },[id, passWord])

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