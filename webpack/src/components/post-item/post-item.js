import React from 'react';
import {Link, browserHistory} from 'react-router';
//import {NotificationSystem} from 'react-notification-system';
import { connect } from 'react-redux';
import classNames from 'classnames';
import CommentItem from './components/comment-item';
import {getDetailedPostInfo} from '../../actions/postsActions';

class PostItem extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
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
            <div>
                <h2>{post.title}</h2>
                <div>{post.author}</div>
                <div>{post.body}</div>
                <div>{post.tags}</div>
                <div>Comments:</div>
                <ul className="comments-list">
                    {comments}
                </ul>
                <div className="new-comment">
                    <div className="new-comment-image"> Image </div>
                    <div className="new-comment-text">
                        <input></input>
                    </div>
                    <div className="new-comment-setting">
                        <div className="btn btn-primary">POST</div>
                    </div>
                </div>
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