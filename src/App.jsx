import React from 'react';
import styles from './styles.scss';
import tabStyles from './components/Tabs/Tabs.scss';
import {Tabs, Tab} from "./components/Tabs/Tabs";
import Connect from "./components/Connect/Connect";
import Tasks from "./components/Tasks/Tasks";


localStorage.setItem("count", 0);

const App = () => {
    return (
        <div className={tabStyles.tabs}>
            <h1>Home work(useState, useEffect)</h1>
            <Tabs>
                <Tab label="Connect">
                    <Connect/>
                </Tab>
                <Tab label="Tasks">
                    <Tasks/>
                </Tab>

            </Tabs>
        </div>
    )
}

export default App;