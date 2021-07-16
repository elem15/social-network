// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialog/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {getInitialization} from "./redux/app-reducer";
import store from "./redux/redux-store";

class App extends React.Component {

    componentDidMount() {
        this.props.getInitialization()
    }

    render() {
        if (!this.props.initialization) {
            return <Preloader/>
        }

        return (
                    <div>
                        <div className='app-wrapper'>
                            <HeaderContainer/>
                            <NavbarContainer/>
                            <div className='app-wrapper-content'>
                                <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}
                                />
                                <Route path='/Dialogs' render={() => <Dialogs/>}
                                />
                                <Route path='/News' render={() => <News/>}/>
                                <Route path='/Music' render={() => <Music/>}/>
                                <Route path='/Settings' render={() => <Settings/>}/>
                                <Route path='/Friends' render={() => <FriendsContainer/>}/>
                                <Route path='/Users' render={() => <UsersContainer/>}/>
                                <Route path='/Login' render={() => <Login/>}/>
                            </div>
                        </div>
                    </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialization: state.initializeReducer.initialization
})

export default compose(withRouter,
    connect(mapStateToProps, {getInitialization}))(App);