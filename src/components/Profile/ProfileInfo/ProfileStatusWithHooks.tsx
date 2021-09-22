import React, {ChangeEvent, useEffect, useState} from 'react';
import {Typography, Space, Button, Input} from 'antd';
import {HighlightOutlined, SmileOutlined, SmileFilled} from '@ant-design/icons';
import {useDispatch} from "react-redux";

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

    // useEffect(() => {
    //     setStatus(props.status)
    // }, [props.status])

    const inActivateMode = () => {
            props.updateStatus(editableStr);
    }
    const onKeyDownHandler = (e: any) => e.keyCode === 13 && props.updateStatus(editableStr)
    const [editableStr, setEditableStr] = useState(props.status)
    // useEffect(() => {
    //     props.updateStatus(editableStr)
    // }, [props.status])
    return (
        <>
            <Text type="secondary">status:
                {(props.isOwner && props.isAuth)
                    ?
                    <Paragraph
                    // @ts-ignore
                    //     onClick={inActivateMode}
                        onBlur={inActivateMode}
                        // onKeyDown={onKeyDownHandler}
                        editable={{tooltip: 'click to edit status',  onChange: setEditableStr, }}>{editableStr}
                    </Paragraph>
                    :
                    <Paragraph>{props.status}</Paragraph>
                }

            </Text>
        </>
    )
}
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
export default ProfileStatusWithHooks;