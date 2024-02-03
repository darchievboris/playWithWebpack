import React, {useState} from 'react';
import classes from './App.module.scss'
export const App = () => {
    const [counter, setCounter] = useState<number>(0);
    const increment = () => setCounter(prev=>prev+1)
    return (
        <div>
            <h1 className={classes.value}>{counter}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
        </div>
    );
};


