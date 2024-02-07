import React, {useState} from 'react';
import classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import About from "@/pages/about/About";
import imgJpg from "@/assets/img1.jpg";
import imgPng from "@/assets/img3.png";
import ImgSvg from "@/assets/img4.svg";

export const App = () => {
    const [counter, setCounter] = useState<number>(0);
    const increment = () => setCounter(prev => prev + 1)
    return (
        <div>
            <div><img width={100} height={100} src={imgPng}/></div>
            <div><img width={100} height={100} src={imgJpg}/></div>
            <div><ImgSvg style={{color:'green'}} width={50} height={50} fill={'red'}/></div>
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


