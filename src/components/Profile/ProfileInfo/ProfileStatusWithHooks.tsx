import React, {ChangeEvent, useEffect, useState} from 'react';
import {Typography, Space, Button, Input} from 'antd';
import {HighlightOutlined, SmileOutlined, SmileFilled} from '@ant-design/icons';

const {Text, Link, Paragraph} = Typography;


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

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    let inActivateMode = () => {
        if (props.isOwner) {
            setEditMode(false);
            props.updateStatus(status);
        }
    }
    const [editableStr, setEditableStr] = useState(props.status)
    useEffect(() => {
        props.updateStatus(editableStr)
    }, [editableStr])
    return (
        <>
            <Text type="secondary">status:
                <Paragraph
                    editable={{tooltip: 'click to edit status', onChange: setEditableStr}}>{editableStr}</Paragraph>

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
            </Text>
        </>
    )
}

export default ProfileStatusWithHooks;