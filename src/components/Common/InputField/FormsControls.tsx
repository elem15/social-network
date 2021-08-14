import React from "react";
import s from './FormsContorls.module.css'

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
                <textarea {...input} placeholder={label} />
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
        <label>{label}</label>
        <div >
            <input {...input} placeholder={label} type={type} />
            <br/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)