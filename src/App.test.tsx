import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import store from "./Redux/State";

test('renders learn react link', () => {
    render(<App state={store.getState()}
                addPost={store.addPost.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
    />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
