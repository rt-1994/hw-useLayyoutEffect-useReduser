import React, {useLayoutEffect, useState} from "react";
import styles from "./Connect.scss";

const Connect = ()=>{

    const [connect, setConnect] = useState(false)
    const [status, setStatus] = useState('Disconnected')

    const changeConnect = ()=>{
        setConnect(!connect)
        if (!connect){
            setTimeout(()=>{
                setStatus("Connected")
            }, 2000)
        }else{
            setStatus("Disconnected")
        }
    }

    return(
        <div className={styles.connect}>
            <h3>{status}</h3>
            <button onClick={changeConnect}>
                {status === "Disconnected" && connect ? "Please wait...": status==="Connected"?"Disconnect":"Connect"}
            </button>
        </div>
    )
}

export default Connect;