import React, {Suspense} from 'react';
import {BrowserRouter, HashRouter, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/MusicContainer';
import Settings from './components/Settings/Settings';
import FriendsContainer from "./components/Friends/FriendsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {getInitialization} from "./redux/app-reducer";
import store from "./redux/redux-store";
import LoginContainer from "./components/Login/LoginContainer";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Button, Avatar, Col, Row} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import s from "./components/Navbar/Navbar.module.css";

const {SubMenu} = Menu;
const {Content, Sider} = Layout
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Dialogs = React.lazy(() => import('./components/Dialog/Dialogs'));

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

    render() {
        if (!this.props.initialization) {
            return <Preloader/>
        }

        return (
            <Layout>
                <Header />
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="My profile">
                                <Menu.Item key="1"><Link to='/Profile'>Profile</Link></Menu.Item>
                                <Menu.Item key="2"><Link exact to='/Dialogs'>Message</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/News'>News</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/Music'>Music</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                <Menu.Item key="5"><Link to='/Users'>Users</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/Friends'>Friends</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Authentication">
                                <Menu.Item key="9"><Link to='/Login'>Login</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
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
                                <Route path='/Login'
                                       render={() => <Suspense fallback={<Preloader/>}><LoginContainer/></Suspense>}/>
                                <Route exact path='/*' render={() => <div>404 PAGE NOT FOUND<br/>
                                    <a href={"/Profile"} type={"link"}>OK!</a></div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
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