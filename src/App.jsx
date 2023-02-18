import React from 'react';
import styles from './styles.scss';
import tabStyles from './components/Tabs/Tabs.scss';
import {Tabs, Tab} from "./components/Tabs/Tabs";
import Connect from "./components/Connect/Connect";
import Tasks from "./components/Tasks/Tasks";
import Colors from "./components/Colors/Colors";
import Avto from "./components/Avto/Avto";
import Counter from "./components/Counter/Counter";


localStorage.setItem("count", 0);

const App = () => {
    return (
        <div className={tabStyles.tabs}>
            <h1>Home work(useReducer, useLayoutEffect)</h1>
            <Tabs>
                <Tab label="Counter">
                    <Counter/>
                </Tab>
                <Tab label="Avto">
                    <Avto/>
                </Tab>
                <Tab label="Connect">
                    <Connect/>
                </Tab>
                <Tab label="Tasks">
                    <Tasks/>
                </Tab>
                <Tab label="Colors">
                    <Colors/>
                </Tab>

            </Tabs>
        </div>
    )
}

export default App;