// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialog/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from "./components/Friends/Friends";


const App = (props) => {

    return (
      <div className='app-wrapper'>
        <Header />
        <Navbar dialogs={props.state.dialogPage.dialogs} />
        <div className='app-wrapper-content'>
          {/* <Route path='/Profile' component={Profile} /> */}
          <Route path='/Profile' render={() => <Profile store={props.store}
              />}
            />
          <Route path='/Dialogs' render={() => <Dialogs store={props.store}
                                                           />}
          />
          <Route path='/News' render={() => <News />} />
          <Route path='/Music' render={() => <Music />} />
          <Route path='/Settings' render={ () => <Settings />} />
          <Route path='/Friends' render={ () => <Friends friends={props.state.sidebar.friends}/>} />
        </div>
      </div>

  );
}

export default App;