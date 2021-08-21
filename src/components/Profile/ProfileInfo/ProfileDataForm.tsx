import React, {useEffect, useState} from 'react';
import s from '../../../components/Common/InputField/FormsContorls.module.css'
import style from './ProfileInfo.module.css'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from "../../Common/InputField/FormsControls";
import {maxLength33, required} from "../../../utils/validators";
import {ProfileType} from "../../../Types/Types";

type OwnPropsType = {
   }
type MapStatePropsType = {
    submitting: boolean
    error: string
    initialValues: ProfileType
}
type MapDispatchPropsType = {
    handleSubmit: any
}
type PropsType = OwnPropsType & MapStatePropsType & MapDispatchPropsType
let ProfileDataForm: React.FC<PropsType> = ({ handleSubmit, submitting, error, initialValues }) => {


    return ( <div>
            <form onSubmit={ handleSubmit }>
                    <button type="submit" disabled={submitting}>save</button>
                <div>
                    {error && <span className={s.formSummaryError}>{error}</span>}
                </div>
                <div>
                    <Field name="fullName" type="text" label="Full Name" component={renderInput}
                           validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="aboutMe" type="text" label="About Me" component={renderInput}
                           validate={[required, maxLength33]}/>
                </div>
                <div>
                    <Field name="lookingForAJob" component='input' type="checkbox"/>Looking for a job
                </div>
                <div>
                <Field name="lookingForAJobDescription" type="text"
                       label="My professional skills" component={renderInput}
                       validate={[required, maxLength33]}/>
                </div>
                <div>Contacts: {
                    Object.keys(initialValues.contacts).map(key => {
                    return (<div className={style.contact} key={key}>
                            <Field name={'contacts.' + key} type="text" label={key} component={renderInput}
                                   validate={[]} />  </div>
                    )
                })}
                </div>
            </form>
        </div>
    )
}

// @ts-ignore
const ProfileDataFormRedux = reduxForm({form: 'profile'})(ProfileDataForm)

export default ProfileDataFormRedux;