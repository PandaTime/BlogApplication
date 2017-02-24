'use strict';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import PostList from '../src/components/posts-list/PostList.js';

describe('MyComponent', ()=>{
    var component;

    beforeEach(()=>{
        component = ReactTestUtils.renderIntoDocument(<PostList />);
    })

    it('it should render', function() {
        expect(component.getDOMNode().textContent()).toBeTruthy();
    });
})