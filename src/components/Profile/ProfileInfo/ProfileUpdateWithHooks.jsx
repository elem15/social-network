import React, {useEffect, useState} from 'react';

const ProfileUpdateWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => setEditMode(true);

    let [lookingForAJobDescription, setProfile] = useState({...props, profile:
            {...props.profile, lookingForAJobDescription: ''}});

    let onStatusChange = e => setProfile(e.currentTarget.value);

    useEffect(() => {
        setProfile(props.profile.lookingForAJobDescription)
    }, [props.profile.lookingForAJobDescription])

    let inActivateMode = () => {
        if (props.profile.userId === props.id) {
            setEditMode(false)
            props.updateProfile(
                {...props.profile, lookingForAJobDescription: lookingForAJobDescription});
        }
    }


    return (
        <div>
            <div>Looking For A Job Description:</div>
            {!editMode &&
            <div>
                <button disabled={props.profile.userId !== props.id} onClick={activateEditMode}>
                    {props.profile.lookingForAJobDescription}</button>
            </div>}

            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={inActivateMode}
                       onChange={onStatusChange}
                       value={lookingForAJobDescription}
                />
            </div>}
        </div>
    )
}

export default ProfileUpdateWithHooks;