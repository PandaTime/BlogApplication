import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './components/post-list-item';
import {getListOfPosts, pageChangeAction} from '../../actions/postsActions';


class PostList extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // changing background image
        document.getElementsByTagName('body')[0].className='forum-body-list';
        // getting posts for first page(argument in function - page number)
        this.props.pageChangeAction(1);
        getListOfPosts(this.props.page);
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
        postList: state.postListReducer,
        page: state.postPageReducer
    };
}

export default connect(mapStateToProps, {pageChangeAction})(PostList);