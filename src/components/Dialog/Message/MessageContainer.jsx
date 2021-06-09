import React from 'react';

import Message from "../Message/Message";

import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages,
    }
}
let mapDispatchToProps = () => {
    return {
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;