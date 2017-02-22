import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../images/default_avatar.png';
import {fetchNewComment} from '../../../api/posts';
import {loginFormVisibilityAction} from '../../../actions/visibilityActions';

class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.submitPost = this.submitPost.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state = {
            newCommentValue: '',
        }
    }
    submitPost(event) {
        event.preventDefault();
        if (!this.state.newCommentValue) {
            return;
        }
        let postData = {
            author: this.props.userName,
            body: this.state.newCommentValue,
            post_link: this.props.url,
        };
        fetchNewComment(postData).then((res)=>{
            if (res.success) {
                this.setState({newCommentValue: ''});
                // refreshing post data
                this.props.refresh();
            }
        });
    }
    handleTextAreaChange(event) {
        this.setState({newCommentValue: event.target.value});
    }
    logIn() {
        this.props.loginFormVisibilityAction(true);
    }
    render() {
        let form = this.props.userName ? (
            <form className="new-comment-form">
                <div className="new-comment-controls">
                    <textarea className="new-comment-textarea" value={this.state.newCommentValue} onChange={this.handleTextAreaChange}/>
                </div>
                <div className="new-comment-buttons">
                    <button className="new-comment-submitbutton default-button" onClick={this.submitPost}>
                        <span className="button-content">Add comment</span>
                    </button>
                </div>
            </form>
        ):(
            <div className="new-comment-unauthorized">
                <div className="unauthorized-message">Have something to say? Log in to join the conversation.</div>
                <button className="login-button default-button" onClick={this.logIn}>
                    <span className="button-content">Log in</span>
                </button>
            </div>
        )
        return (
            <div className="new-comment">
                <header className="new-comment-header">
                    <h1>Join the Conversation</h1>
                </header>
                <div className="new-comment-content">
                    <aside className="new-comment-author">
                        <div className="new-comment-author-avatar">
                            <img src={'../' + defaultAvatar}/>
                        </div>
                        <div className="new-comment-author-details">
                            <div className="new-comment-author-name">{this.props.userName || 'Unknown hero'}</div>
                        </div>
                    </aside>
                    {form}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userName: state.authericationReducer,
    };
}

export default connect(mapStateToProps, {loginFormVisibilityAction})(NewComment);
