import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import PostList from './components/posts-list/PostList';
import PostItem from './components/post-item/PostItem';
import ErrorRoute from './components/error-route/error-route';
import Register from './components/user-components/register';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostList} />
        <Route path="/" component={PostList} />
        <Route path="/page/:page" component={PostList} />
        <Route path="/post/:id" component={PostItem} />
        <Route path="/register" component={Register} />
        <Route path="/404" component={ErrorRoute} />
        <Redirect from="/*" to="/404" />
    </Route>
);
