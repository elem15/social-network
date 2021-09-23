import React, {ChangeEvent, useEffect, useState} from 'react';
import {Typography} from 'antd';

const {Text,  Paragraph} = Typography;


type PropsType = {
    userId: number
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    isAuth: boolean
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => setEditMode(true);

    const [status, setStatus] = useState(props.status);
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value);

    const inActivateMode = () => {
            props.updateStatus(editableStr);
    }

    const [editableStr, setEditableStr] = useState(props.status)
    return (
        <>
            <Text type="secondary">status:
                {(props.isOwner && props.isAuth)
                    ?
                    <Paragraph
                    // @ts-ignore
                        onBlur={inActivateMode}
                        editable={{tooltip: 'click to edit status',  onChange: setEditableStr }}>
                        {editableStr
                            ?
                            <span>{editableStr}</span>
                            :
                            <span>{props.status}</span>
                        }

                    </Paragraph>
                    :
                    <Paragraph>{props.status}</Paragraph>
                }

            </Text>
        </>
    )
}
export default ProfileStatusWithHooks;
{/*{!editMode &&*/}

{/*    <Button type={"text"} disabled={!props.isOwner || !props.isAuth} onClick={activateEditMode}>{props.status}</Button>*/}
{/*}*/}

{/*{editMode &&*/}
{/*    <Input placeholder="Basic usage"*/}
{/*           autoFocus={true}*/}
{/*           onBlur={inActivateMode}*/}
{/*           onChange={onStatusChange}*/}
{/*           value={status}*/}
{/*    />}*/}
