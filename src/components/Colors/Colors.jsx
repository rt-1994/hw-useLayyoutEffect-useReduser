import React, {useReducer, useRef} from "react";
import styles from "./Colors.scss";
import reducer from "./Reducer";

let colorList = [
    {id: 0, color: "Red", checked: false},
    {id: 1, color: "Blue", checked: false},
    {id: 2, color: "Purple", checked: false},
    {id: 3, color: "Green", checked: false},
    {id: 4, color: "White", checked: false},
    {id: 5, color: "Pink", checked: false},
    {id: 6, color: "Orange", checked: false},
]

export default function Colors() {

    const [colors, dispatch] = useReducer(reducer, colorList)

    function reset() {
        dispatch({type: "reset"})
    }

    function check(id) {
        dispatch({type: "check", id})
    }

    return (
        <div className={styles.colors}>
            <ul className={styles.colorList}>
                {colors.map((colorItem) =>
                    <li key={colorItem.id} className={styles.taskListItem}>
                        <p className={colorItem.checked?styles.checked:""}>{colorItem.color}</p>
                        <button onClick={()=>check(colorItem.id)}>
                            {colorItem.checked?"Resived":"Kill" }
                        </button>
                    </li>)}
            </ul>
            <button onClick={reset} className={styles.reset}>Reset</button>
        </div>
    )
}