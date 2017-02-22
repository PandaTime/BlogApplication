import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../images/default_avatar.png';

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let comment = this.props.commentData;
        return (
            <div className="comment-content">
                <aside className="comment-author">
                    <div className="comment-author-avatar">
                        <img src={'../' + defaultAvatar}/>
                    </div>
                    <div className="comment-author-details">
                        <div className="comment-author-name">{comment.author}</div>
                        <div className="comment-author-postscount">0 posts</div>
                    </div>
                </aside>
                <div className="comment-body">{comment.body}</div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        showData: state.changeShownReducer,
        
    };
}

export default connect(mapStateToProps, {})(CommentItem);
