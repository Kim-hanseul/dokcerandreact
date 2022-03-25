import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React,{useState} from "react"
export default function Home() {
    const [count,setCount] = useState(0);
    return (
    <>
    <button onClick={()=>{setCount(count+1)}}>+</button> <br/>
    <button onClick={()=>{setCount(count-1)}}>-</button>
    <div>{count}</div>
    </>
  )
}
