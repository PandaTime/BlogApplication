import React from 'react';
import {Link} from 'react-router';
//import {NotificationSystem} from 'react-notification-system';
import { connect } from 'react-redux';
import classNames from 'classnames';

class CommentItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let comment = this.props.commentData;
        return (
            <li className="comment-data">
                <div></div>
                <div className="comment-details">
                    <div className="comment-user-info">{comment.author}</div>
                    <div className="comment-body">{comment.body}</div>
                </div>
                <div className="footer-not-in-css"></div>
            </li>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        showData: state.changeShownReducer
    };
}

export default connect(mapStateToProps, {})(CommentItem);