import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './components/post-list-item';
import {getListOfPosts} from '../../actions/postsActions';


class PostList extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // changing background image
        document.getElementsByTagName('body')[0].className='forum-body-list';
        // getting posts for first page(argument in function - page number)
        getListOfPosts(1);
    }
    render() {
        var list = this.props.postList.map((el, index)=>{
            return(
                <PostListItem key={index} post={el}/>
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