import React from 'react';

import Message from "../Message/Message";

import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messages: state.dialogPage.messages
    }
}
let mapDispatchToProps = () => {
    return {
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message)
