import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
export const App = () => {
    const [counter, setCounter] = useState<number>(0);
    const increment = () => setCounter(prev=>prev+1)
    return (
        <div>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <br/>

            <h1 className={classes.value}>{counter}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
            <About/>
        </div>
    );
};


