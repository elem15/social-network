import React from 'react';
import s from '../../../components/Common/InputField/FormsContorls.module.css'
import style from './ProfileInfo.module.css'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from "../../Common/InputField/FormsControls";
import {maxLength33, required} from "../../../utils/validators";
import {ProfileType} from "../../../Types/Types";
import {Button, Divider, Space, Typography} from "antd";

const { Title, Text } = Typography

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
const ProfileDataForm: React.FC<PropsType> = ({ handleSubmit, submitting, error, initialValues }) => {
    return ( <Space direction="vertical">
            <form onSubmit={ handleSubmit }>
                    <button className={style.button} type="submit" disabled={submitting}><Button>save</Button></button>
                <Divider/>
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
                <Divider/>
                <div><Title level={5}>Contacts:</Title>  {
                    Object.keys(initialValues.contacts).map(key => {
                    return (<div className={style.contact} key={key}>
                            <Field name={'contacts.' + key} type="text" label={key} component={renderInput}
                                   validate={[maxLength33]} />  </div>
                    )
                })}
                </div>
            </form>
        </Space>
    )
}

// @ts-ignore
const ProfileDataFormRedux = reduxForm({form: 'profile'})(ProfileDataForm)

export default ProfileDataFormRedux;