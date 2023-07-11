import React, {useState} from 'react';
import {Typography} from 'antd';

const {Text,  Paragraph} = Typography;


type PropsType = {
    userId: number
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    isAuth: boolean
    authId: number
    getStatus: (userId: number) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editableStr, setEditableStr] = useState(props.status)
    const getStatus = () => props.updateStatus(editableStr);

    return (
        <>
            <Text type="secondary">status:
                {(props.isOwner && props.isAuth)
                    ?
                    <Paragraph
                    // @ts-ignore
                        onBlur={getStatus}
                        editable={{tooltip: 'click to edit status', onChange: setEditableStr }}>
                        {editableStr}
                    </Paragraph>
                    :
                    <Paragraph>{props.status}</Paragraph>
                }
            </Text>
        </>
    )
}
export default ProfileStatusWithHooks;

