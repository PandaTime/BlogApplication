import React from 'react';
import {Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

class PostListItem extends React.Component {
    constructor(props){
        super(props);
    }
    getTime(date){
        let diff = new Date() - date,
            res;
        if(diff > 604800000){
            res = `${new Date(date).getDate()} ${months[new Date(date).getMonth()]}`;
        }else if((diff = parseInt(diff/(1000 * 60 * 60 * 24))) > 1){
            res = diff + 'd';
        }else if((diff = parseInt(diff * 24)) > 1){
            res = diff + 'h';
        }else{
            res = diff * 60 + 'm'
        }
        return res;
    }
    render(){
        let post = this.props.post,
            url = `/post/${post.permalink}`,
            lastPost = this.getTime(post.date),
            commentsAmount = post.comments.length;

        return (
            <Link to={url} className="post-topic" >
                <span className="post-type">
                    <i className="post-icon"></i>
                </span>
                <div className="post-details">
                    <span className="post-header">
                        <span className="post-title">{post.title}</span>
                    </span>
                    <span className="post-replies">
                        <i className="post-replies-icon"></i>
                        <span>{commentsAmount}</span>
                    </span>
                    <span className="post-author">{post.author}</span>
                    <span className="post-lastcomment">
                        <Link to={"/"} data-comment="there will be link to last post">{lastPost}</Link>
                    </span>
                </div>
            </Link>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        postDetailedInfo: state.postDetailedInfoReducer
    };
}

export default connect(mapStateToProps, {})(PostListItem);