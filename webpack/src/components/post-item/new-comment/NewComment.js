import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../../images/default_avatar.png';

class NewComment extends React.Component {
    constructor(props){
        super(props)
        this.submitPost = this.submitPost.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.state = {
            newCommentValue: ''
        }
    }
    submitPost(event){
        event.preventDefault();
        console.log(this.state.newCommentValue);
    }
    handleTextAreaChange(event){
        this.setState({newCommentValue: event.target.value});
    }
    render() {
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
                            <div className="new-comment-author-name">{this.props.userName || "Anonymous"}</div>
                        </div>
                    </aside>
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
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        userName: state.authericationReducer
    };
}

export default connect(mapStateToProps, {})(NewComment);