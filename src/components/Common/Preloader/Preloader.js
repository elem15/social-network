import preloader from "../../../assets/images/audio.svg";
import React from "react";
import styles from './Preloader.module.css'

let Preloader = () => {
    return <div ><img className={styles.preload} src={preloader} /></div>
}

export default Preloader;