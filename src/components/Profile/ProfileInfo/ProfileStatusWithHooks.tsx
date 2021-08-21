import React, {ChangeEvent, useEffect, useState} from 'react';


type PropsType = {
    userId: number
    status: string
    updateStatus:(status: string) => void
    isOwner: boolean
    isAuth: boolean
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true);

    const [status, setStatus] = useState(props.status);
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value);

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