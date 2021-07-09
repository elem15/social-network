import React from "react";
import s from './FormsContorls.module.css'
export const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning }
                     }) => (
    <div className={s.formControl + ' ' + (touched && error && s.error)}>
        <label>{label}</label>
        <div >
            <textarea {...input} placeholder={label} type={type} />
            <br/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export const renderInput = ({   input,
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