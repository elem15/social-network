import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {dialogsSelect} from "../../../redux/dialog-selectors";
import {DialogsType} from "../../../Types/Types";
import { Image, Divider } from 'antd';

type PropsType = {
    // dialogs: Array<DialogsType>,

}

const DialogUsers: React.FC<PropsType> = () => {
    const dialogs = useSelector(dialogsSelect)
    return <div className={s.dialogContent}>
        {
            dialogs.map((d: DialogsType) => <div key={d.id}>
                    <div >
                        <NavLink to={'/Dialogs/' + d.id}><Image width={90} src={d.src}/>
                        <div></div>
                        <br/>
                            {d.name}</NavLink>
                        <br/>
                    </div>
                <Divider></Divider>
                </div>
            )
        }

    </div>

}

export default DialogUsers;