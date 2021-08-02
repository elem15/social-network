import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true);

    const [status, setStatus] = useState(props.status);
    const onStatusChange = e => setStatus(e.currentTarget.value);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let inActivateMode = () => {
        if (props.isOwner) {
            setEditMode(false);
            props.updateStatus(status);
        }
    }


    return (
        <div>
            <div>status:</div>
            {!editMode &&
            <div>
                <button disabled={!props.isOwner || !props.isAuth} onClick={activateEditMode}>{props.status}</button>
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