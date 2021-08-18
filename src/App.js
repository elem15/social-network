import React, {Suspense} from 'react';
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from "./components/Friends/FriendsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {getInitialization} from "./redux/app-reducer";
import store from "./redux/redux-store";
import LoginContainer from "./components/Login/LoginContainer";

const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Dialogs = React.lazy(() => import('./components/Dialog/Dialogs'));

class App extends React.Component {
    catchAllUnhandledErrors = (e) => {
        console.error("Error occurred: " + e.reason.message );
        return false;
    }
    componentDidMount() {
        this.props.getInitialization();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={"/Profile"}/>}/>
                            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/News' render={() => <News/>}/>
                            <Route path='/Music' render={() => <Music/>}/>
                            <Route path='/Settings' render={() => <Settings/>}/>
                            <Route path='/Friends' render={() => <FriendsContainer/>}/>
                            <Route path='/Dialogs'
                                   render={() => <Suspense fallback={<Preloader/>}><Dialogs/></Suspense>}/>
                            <Route path='/Users'
                                   render={() => <Suspense fallback={<Preloader/>}>
                                       <UsersContainer pageTitle={'Users'}/></Suspense>}/>
                            <Route path='/Login' render={() => <Suspense fallback={<Preloader/>}><LoginContainer/></Suspense>}/>
                            <Route exact path='/*' render={() => <div>404 PAGE NOT FOUND</div>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialization: state.initializeReducer.initialization
})

const AppContainer = compose(withRouter,
    connect(mapStateToProps, {getInitialization}))(App);
/*basename={process.env.PUBLIC_URL}*/
const SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp;