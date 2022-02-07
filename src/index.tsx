
import './index.css';



import state, {subscribe} from "./Redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, RootStateType, updateNewMessageText, updateNewPostText} from "./Redux/State";
import {addPost} from "./Redux/State";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
subscribe(rerenderEntireTree)

reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

