import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PostItem from '../post-item/post-item';
import {getListOfPosts} from '../../actions/postsActions';


class PostList extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        getListOfPosts(1);
    }
    render() {
        var list = this.props.postList.map((el, index)=>{
            var url = `/post/${el.permalink}`;
            return(
                <Link to={url} key={index}>{el.title}</Link>
            )
        });
        return (
            <div className="container">
                {list}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        postList: state.postListReducer
    };
}

export default connect(mapStateToProps, {})(PostList);