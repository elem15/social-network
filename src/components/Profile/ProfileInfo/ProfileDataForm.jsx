import React, {useEffect, useState} from 'react';
import s from '../../../components/Common/InputField/FormsContorls.module.css'
import {Field, reduxForm} from 'redux-form'
import {renderInput} from "../../Common/InputField/FormsControls";
import {maxLength33, required} from "../../../utils/validators";


const ProfileDataForm = ({ handleSubmit, submitting, error, ...props }) => {

    // let [profile, setProfile] = useState(props.profile);
    //
    // useEffect(() => {
    //     setProfile(props.profile)
    // }, [props.profile])
    //
    // // handleSubmit = (values) => {
    //     if (props.profile.userId === props.id) {
            // props.updateProfile(values);
            // props.setEditMode(false);
    //     }
    // }


    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <Field name="FullName" type="text" label="Full Name" component={renderInput}
                           validate={[required, maxLength33]} value={props.profile.fullName}/>
                </div>
                <div>
                    <Field name="AboutMe" type="text" label="About Me" component={renderInput}
                           validate={[required, maxLength33]} defaultValue={props.profile.aboutMe}/>
                </div>
                <div>
                    <Field name="lookingForAJob" component='input' type="checkbox"/>Looking for a job
                </div>
                <div>
                <Field name="lookingForAJobDescription" type="text"
                       label="Looking for a job description" component={renderInput}
                       validate={[required, maxLength33]}/>
                </div>
                {error && <span className={s.formSummaryError}>{error}</span>}
                <div>
                    <button type="submit" disabled={submitting}>Sign in</button>
                </div>
            </form>
        </div>
    )
}



const ProfileDataReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)

export default ProfileDataReduxForm;