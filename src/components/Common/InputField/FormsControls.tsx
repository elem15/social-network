import React from "react";
import s from './FormsContorls.module.css'
import { Typography } from 'antd';

const { Text } = Typography;

type PropsType = {
    input: Array<string>,
    label: string,
    type: any,
    meta: any
}
export const renderField: React.FC<PropsType> =  ({
                         input,
                         label,
                         meta: { touched, error, warning }
                     }) =>  (
        <div className={s.formControl + ' ' + (touched && error && s.error)}>
            <label></label>
            <div>
                <textarea className={s.textarea} {...input} placeholder={label} />
                <br/>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    )


export const renderInput: React.FC<PropsType> = ({   input,
                                label,
                                type,
                                meta: { touched, error, warning }
                            }) => (
    <div className={s.formControl + ' ' + (touched && error && s.error)}>
        <label><Text type='secondary'>{label}</Text></label>
        <div >
            <input {...input} className={s.textarea} placeholder={label} type={type} />
            <br/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)