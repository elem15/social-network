
import React from "react";
import styles from './Preloader.module.css'

import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{fontSize: 72}} spin/>;


const Preloader = () => {
    return (
        <div className={styles.preload}>
            <Spin indicator={antIcon}/>
        </div>
    )
}

export default Preloader;