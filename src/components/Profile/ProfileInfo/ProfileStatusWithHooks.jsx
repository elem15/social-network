import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let activateEditMode = () => setEditMode(true);

    let [status, setStatus] = useState(props.status);
    let onStatusChange = e => setStatus(e.currentTarget.value);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let inActivateMode = () => {
        if (props.userId === props.id) {
            setEditMode(false)
            props.updateStatus(status);
        }
    }


    return (
        <div>
            <div>status:</div>
            {!editMode &&
            <div>
                <button disabled={props.userId !== props.id} onClick={activateEditMode}>{props.status}</button>
            </div>}

            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={inActivateMode}
                       onChange={onStatusChange}
                       value={status}
                />
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;