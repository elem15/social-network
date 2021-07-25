import React, {useEffect, useState} from 'react';

const ProfileUpdateWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let activateEditMode = () => setEditMode(true);

    let [lookingForAJobDescription, setLookingForAJobDescription] = useState(props.lookingForAJobDescription);
    let onStatusChange = e => setLookingForAJobDescription(e.currentTarget.value);

    useEffect(() => {
        setLookingForAJobDescription(props.lookingForAJobDescription)
    }, [props.lookingForAJobDescription])

    let inActivateMode = () => {
        if (props.userId === props.id) {
            setEditMode(false)
            props.updateProfile(lookingForAJobDescription);
        }
    }


    return (
        <div>
            <div>Looking For A Job Description:</div>
            {!editMode &&
            <div>
                <button disabled={props.userId !== props.id} onClick={activateEditMode}>{props.lookingForAJobDescription}</button>
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