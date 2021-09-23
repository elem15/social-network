import React from 'react';
import s from './Dialogs.module.css';
import DialogsItemContainer from "./DialogItem/DialogsItemContainer";
import MessageContainer from "./Message/MessageContainer";
import {Col, Layout, Row} from "antd";
import DialogUsers from "./DialogUsers/DialogUsers";

const Dialogs = () => {
    return (
        <Layout>
            <DialogsItemContainer/>
            <Row>
                <Col xs={{span: 10, offset: 0}}
                     sm={{span: 10, offset: 0}}
                     md={{span: 8, offset: 0}}>
                    <DialogUsers/>
                </Col>
                <Col xs={{span: 12, offset: 2}}
                     sm={{span: 10, offset: 2}}
                     md={{span: 10, offset: 4}}>
                    <MessageContainer/>
                </Col>
            </Row>
        </Layout>
    )

}

export default Dialogs;