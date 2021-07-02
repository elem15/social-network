import React from 'react';

import Message from "../Message/Message";

import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages
    }
}
let mapDispatchToProps = () => {
    return {
    }
}

let AuthRedirectComponent = withAuthRedirect(Message);
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default MessageContainer;