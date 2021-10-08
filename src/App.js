import React, {Suspense} from 'react';
import {BrowserRouter, HashRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';

import Music from './components/Music/MusicContainer';
import Settings from './components/Settings/Settings';
import FriendsContainer from "./components/Friends/FriendsContainer";
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialog/Dialogs";
import {connect, Provider, useSelector} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {getInitialization} from "./redux/app-reducer";
import store from "./redux/redux-store";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Typography} from 'antd';
import {ProfileOutlined, UsergroupAddOutlined, LoginOutlined} from '@ant-design/icons';
import {userSignOut} from './redux/auth-reducer';
import ProfileContainer from "./components/Profile/ProfileContainer";

const {SubMenu} = Menu;
const {Content, Sider, Footer} = Layout
const {Title} = Typography
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Login = React.lazy(() => import("./components/Login/LoginContainer"));
const Profile = React.lazy(() => import('./components/Profile/ProfileContainer'));
const News = React.lazy( () => import('./components/News/News'));



class App extends React.Component {
    catchAllUnhandledErrors = (e) => {
        console.error("Error occurred: " + e.reason.message);
        return false;
    }

    componentDidMount() {
        this.props.getInitialization();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    signOut = () => {
        this.props.userSignOut()
    }
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {

        if (!this.props.initialization) {
            return <Preloader/>
        }

        const {collapsed} = this.state;
        const pathname = this.props.location.pathname.split('').splice(1, this.props.location.pathname.length).join('')

        return (

            <Layout style={{fontSize:"large"}}>
                <Header/>
                <Layout>
                    <Sider theme='light' collapsedWidth={50} collapsible collapsed={collapsed}
                           onCollapse={this.onCollapse} breakpoint={"lg"}>
                        <Menu
                            mode="inline"
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<ProfileOutlined/>} title="Profile">
                                <Menu.Item key="1"><Link to='/Profile/'>My profile</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/News'>News</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/Music'>Music</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<UsergroupAddOutlined/>} title="Developers">
                                <Menu.Item key="5"><Link to='/Users'>Users</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<LoginOutlined/>} title="Authentication">
                                <Menu.Item key="9">
                                    {!this.props.isAuth
                                        ?
                                        <Link to='/Login'>Login</Link>
                                        :
                                        <div onClick={this.signOut}>Log out</div>
                                    }
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px',}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item><Link to='/Profile'>Home</Link></Breadcrumb.Item>
                            <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 12,
                                margin: 0,
                                minHeight: 280,

                            }}
                        >
                            <Switch>
                                <Route exact path='/' render={() => <ProfileContainer/> } />
                                <Route exact path='/Profile' render={() => <Suspense fallback={<Preloader/>}>
                                    <Profile/></Suspense>}/>
                                <Route path='/Profile/:userId?' render={() => <ProfileContainer/> }/>
                                <Route path='/News' render={() => <Suspense fallback={<Preloader/>}><News/></Suspense>}/>
                                <Route path='/Music' render={() => <Music/>}/>
                                <Route path='/Settings' render={() => <Settings/>}/>
                                <Route path='/Friends' render={() => <FriendsContainer/>}/>
                                <Route path='/Dialogs' render={() => <Dialogs/>}/>
                                <Route path='/Users'
                                       render={() => <Suspense fallback={<Preloader/>}>
                                           <UsersContainer pageTitle={'Users'}/></Suspense>}/>
                                <Route path='/Login'
                                       render={() => <Suspense fallback={<Preloader/>}><Login/></Suspense>}/>
                                <Route exact path='/*' render={() => <Title type={1}>404 PAGE NOT FOUND<br/><br/>
                                    <a href={"/Profile"} type={"link"}>HOME</a></Title>}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Social Network ©2021 Created by Elem</Footer>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}


const mapStateToProps = (state) => ({
    initialization: state.initializeReducer.initialization,
    isAuth: state.auth.isAuth
})

const AppContainer = compose(withRouter,
    connect(mapStateToProps, {getInitialization, userSignOut}))(App);
/*basename={process.env.PUBLIC_URL}*/
const SamuraiJSApp = () => {
    return (
        <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
</HashRouter>
    )
}
export default SamuraiJSApp;