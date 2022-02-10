import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router"
import {Dialogs} from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import store, {RootStateType, StoreType} from "./Redux/State";



type AppPropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
    updateNewPostText: (newPostText: string) => void
    updateNewMessageText: (newMessageText: string) => void
}


const App = (props: AppPropsType) => {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile postsData={props.state.profilePage.postsData}
                                                                 newPostText={props.state.profilePage.newPostText}
                                                                 addPost={props.addPost}
                                                                 updateNewPostText={props.updateNewPostText}
                        />}
                        />
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage}
                                                                   addMessage={props.addMessage}
                                                                   updateNewMessageText={props.updateNewMessageText}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
