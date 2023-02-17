import React, {useReducer, useRef} from "react";
import styles from "./Tasks.scss";
import reducer from "./Reducer";

let taskArr = [{id: 0, text: "Test"}]

export default function Tasks() {

    const [tasks, dispatch] = useReducer(reducer, taskArr)
    const input = useRef(null)

    function add() {
        dispatch({type: "add", payload: {id:tasks.length, text: input.current.value}})
        input.current.value = ""
    }

    function del(id) {
        dispatch({type: "delete", id})
    }

    return (
        <div className={styles.tasks}>
            <div className={styles.tasksHeader}>
                <input ref={input} type="text"/>
                <input type="submit" onClick={add} value="Add"/>
            </div>

            <ul className={styles.taskList}>
                {tasks.map((task) =>
                    <li key={task.id} className={styles.taskListItem}>
                        <p>{task.text}</p>
                        <button onClick={()=>del(task.id)}>
                            Remove
                        </button>
                    </li>)}
            </ul>
        </div>
    )
}