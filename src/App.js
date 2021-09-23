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
import {connect, Provider, useSelector} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {getInitialization} from "./redux/app-reducer";
import store from "./redux/redux-store";
import LoginContainer from "./components/Login/LoginContainer";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb } from 'antd';
import {ProfileOutlined, UsergroupAddOutlined, LoginOutlined} from '@ant-design/icons';
import { userSignOut } from './redux/auth-reducer';

const {SubMenu} = Menu;
const {Content, Sider, Footer} = Layout
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
    signOut = () => {
        this.props.userSignOut()
    }
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {

        if (!this.props.initialization) {
            return <Preloader/>
        }
        const BreadCrmp = ({page}) => {
            return (
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item><Link to='/Profile'>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{page}</Breadcrumb.Item>
                </Breadcrumb>
            )
        }
        const { collapsed } = this.state;
        return (

            <Layout >
                <Header  />
                <Layout >
                    <Sider theme='light' collapsedWidth={50} collapsible collapsed={collapsed} onCollapse={this.onCollapse} breakpoint={"lg"}>
                        <Menu
                            mode="inline"
                            style={{height: '100%', borderRight: 0}}
                        >
                            <SubMenu key="sub1" icon={<ProfileOutlined />} title="My profile">
                                <Menu.Item key="1"><Link to='/Profile' >Profile</Link></Menu.Item>
                                <Menu.Item key="2"><Link exact to='/Dialogs' >Message</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/News' >News</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/Music'>Music</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="Developers">
                                <Menu.Item key="5"><Link to='/Users'>Users</Link></Menu.Item>
                                <Menu.Item key="6"><Link to='/Friends'>Friends</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<LoginOutlined />} title="Authentication">
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

                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 12,
                                margin: 0,
                                minHeight: 280,

                            }}
                        >
                            <Switch>
                                <Route exact path='/' render={() => <Redirect to={"/Profile"}/>} />
                                <Route path='/Profile/:userId?' render={() => <><BreadCrmp page={'Profile'}/><ProfileContainer/></>}/>
                                <Route path='/News' render={() => <><BreadCrmp page={'News'}/><News/></>}/>
                                <Route path='/Music' render={() => <><BreadCrmp page={'Music'}/><Music/></>}/>
                                <Route path='/Settings' render={() => <><BreadCrmp page={'Setting'}/><Settings/></>}/>
                                <Route path='/Friends' render={() => <><BreadCrmp page={'Friends'}/><FriendsContainer/></>}/>
                                <Route path='/Dialogs'
                                       render={() => <Suspense fallback={<Preloader/>}><BreadCrmp page={'Preloader'}/><Dialogs/></Suspense>}/>
                                <Route path='/Users'
                                       render={() => <Suspense fallback={<Preloader/>}>
                                           <BreadCrmp page={'Users'}/>
                                           <UsersContainer pageTitle={'Users'}/></Suspense>}/>
                                <Route path='/Login'
                                       render={() => <Suspense fallback={<Preloader/>}><BreadCrmp page={'Login'}/><LoginContainer/></Suspense>}/>
                                <Route exact path='/*' render={() => <><BreadCrmp page={'404'}/><div>404 PAGE NOT FOUND<br/>
                                    <a href={"/Profile"} type={"link"}>OK!</a></div></>}/>
                            </Switch>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Social Network ©2021 Created by Elem</Footer>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp;