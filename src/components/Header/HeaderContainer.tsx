import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {userSignOut} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {PhotosType, ProfileType} from "../../Types/Types";
import {profileAPI} from "../../api/api";
// import {AppStateType} from "../../redux/redux-store";

type PropsType ={
    id: number,
    profile: ProfileType | null
}

class HeaderContainer extends React.Component<PropsType> {
    state = {
        result: null,
        authId: this.props.id
    }
    componentDidMount() {
        this.getProfile()
    }
    getProfile = async () => {
        await profileAPI.getProfile(this.props.id).then(result => this.setState({result}))
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if(this.props.id !== prevProps.id) {
            this.getProfile()
        }
    }

    render() {
        const {result} = this.state

        return <Header profile={result} />
    }
}



const mapStateToProps = (state: AppStateType) => ({
    id: state.auth.id,
    profile: state.postPage.profile

})
export default connect(mapStateToProps, {})(HeaderContainer);