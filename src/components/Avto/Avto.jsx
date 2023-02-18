import React, {useReducer} from "react";
import styles from "./Avto.scss";
import images from "../../assets/images";
import reducer from "./Reducer";

let avtoInfo = {
    basic: {
        name: "Nexia",
        image: "nexia",
        basicAmount: 26395,
        features: []
    },
    features:[
        {
            id:1,
            title: "Premium sound system",
            price: 500
        },
        {
            id:2,
            title: "V-6 engine",
            price: 1500
        },
        {
            id:3,
            title: "Rear spoiler",
            price: 250
        },
        {
            id:4,
            title: "Racing detail package",
            price: 1500
        }
    ]
}

export default function Avto(){

    const [avto, dispatch] = useReducer(reducer, avtoInfo)
    function add(id){
        dispatch({type: "add", id})
    }
    function del(id){
        dispatch({type: "delete", id})
    }

    return(
        <div className={styles.avto}>
            <div className={styles.left}>
                <img src={images[avto.basic.image]} alt=""/>
                <p>Amount: ${avto.basic.basicAmount}</p>
                <h2>Added features:</h2>
                <ul>
                    {  avto.basic.features.length === 0 ?
                        "You can purchase items from the store":
                        avto.basic.features.map((item)=>
                            <li key={item.id}>
                                <button onClick={()=>del(item.id)}> X </button>{item.title}
                            </li>)
                    }

                </ul>
            </div>
            <div className={styles.right}>
                <h2>Aditional Features</h2>
                <ul>
                    {  avto.features.length === 0?
                        "Nise looking car":
                        avto.features.map((item)=><li key={item.id}>
                        <button onClick={()=>add(item.id)}>Add</button> {item.title} (+{item.price})</li>)}
                </ul>

                <h2>
                    Total amount: $
                    {avto.basic.basicAmount + avto.basic.features
                        .reduce((summ, item)=>{return summ+item.price},0)}
                </h2>
            </div>
        </div>
    )
}