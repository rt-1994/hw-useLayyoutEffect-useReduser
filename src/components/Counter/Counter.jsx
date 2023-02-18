import React, {useReducer} from "react";
import cn from "classnames";
import styles from "./Counter.scss";
import reducer from "./Reducer";
import classNames from "classnames";

export  default function Counter (){

    const [count, dispatch] = useReducer(reducer, {value: 0, hidden: false})

    function inc(){
        dispatch({type: "inc"})
    }

    function dec(){
        dispatch({type: "dec"})
    }

    function hide(){
        dispatch({type: "hide"})
    }

    return(
        <div className={styles.counter}>
            <button onClick={hide}>Toggle hidden</button>
            <div className={cn(styles.counterBlock, count.hide ? styles.hide : "")} >
                <button onClick={inc}>Increment</button>
                <h3>{count.value}</h3>
                <button onClick={dec}>Decrement</button>
            </div>


        </div>
    )
}