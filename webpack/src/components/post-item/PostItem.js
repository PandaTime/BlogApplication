import React from 'react';
import {browserHistory} from 'react-router';
//import {NotificationSystem} from 'react-notification-system';
import { connect } from 'react-redux';
import CommentItem from './comment-item/CommentItem';
import NewComment from './new-comment/NewComment';
import {getDetailedPostInfo} from '../../actions/postsActions';
import defaultAvatar from '../../images/default_avatar.png';

class PostItem extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // changing background image
        document.getElementsByTagName('body')[0].className='forum-body-post';
        // getting that post information aka body, comments etc.
        getDetailedPostInfo(this.props.params.id);
    }
    errorPage(){
        browserHistory.push('/404');
    }
    render(){
        let post = this.props.postDetailedInfo;
        let comments = (post.comments || []).map((el, id)=>{
            return (
                <CommentItem commentData={el} key={id}/>
            )
        });
        return (
            <div className="container topic">
                <section className="">
                    <header className="topic-header">
                        <h1 className="topic-title">{post.title}</h1>
                        <span className="topic-tags">Tags: {(post.tags || []).join(', ')}</span>
                    </header>
                    <div className="topic-content">
                        <aside className="topic-author">
                            <div className="topic-author-avatar">
                                <img src={'../' + defaultAvatar}/>
                            </div>
                            <div className="topic-author-details">
                                <div className="topic-author-name">{post.author}</div>
                                <div className="topic-author-postscount">0 posts</div>
                            </div>
                        </aside>
                        <div className="topic-body">{post.body}</div>
                    </div>
                </section>
                <section className="comments">
                    {comments}
                </section>
                <section className="post-new-comment">
                    <NewComment />
                </section>
                <section className="post-return-nav">
                    <button onClick={browserHistory.goBack} className="default-button post-return-button">
                        <i></i>
                        <span className="default-button-content">Return to Forum</span>
                    </button>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        postDetailedInfo: state.postDetailedInfoReducer
    };
}

export default connect(mapStateToProps, {})(PostItem);