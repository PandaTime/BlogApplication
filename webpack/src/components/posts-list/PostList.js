import React from 'react';
import { connect } from 'react-redux';
import PostListItem from './components/post-list-item';
import {openPage, getListOfPosts} from '../../actions/postsActions';
import classNames from 'classnames';
import {browserHistory} from 'react-router';


class PostList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // changing background image
        document.getElementsByTagName('body')[0].className='forum-body-list';
        // getting posts for first page(argument in function - page number)
        openPage(this.props.params.page || this.props.page || 1);
    }
    changePage(delta) {
        let page = this.props.page + delta;
        if (page > 0) {
            browserHistory.push(`/page/${page}`);
        } else {
            browserHistory.push('/404');
        }
        openPage(page);
    }
    render() {
        var list = this.props.postList.map((el, index)=>{
            return (
                <PostListItem key={index} post={el}/>
            )
        });
        return (
            <section className="container">
                <header className="forum-content-header">
                    <h1 className="forum-heading">
                        <a>General</a>
                    </h1>
                    <div className="header-controls">
                        <button className="forum-new-topic default-button">
                            <span className="default-button-content">
                                <i />
                                New Topic
                            </span>
                        </button>
                    </div>
                </header>
                {list}
                <div className="pagination-footer">
                    <a className={classNames(this.props.page < 2 ? 'hide' : '', 'default-button pagination-button previous-page')}
                       onClick={this.changePage.bind(this, -1)}>
                        <span className="default-button-content"><i />Previous</span>
                    </a>
                    <a className={classNames(this.props.page < 2 ? 'hide' : '', 'default-button pagination-button current-page')}>
                        <span>PAGE {this.props.page}</span>
                    </a>
                    <a className="default-button pagination-button next-page" onClick={this.changePage.bind(this, +1)}>
                        <span className="default-button-content">Next<i /></span>
                    </a>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        postList: state.postListReducer,
        page: state.postPageReducer,
    };
}

export default connect(mapStateToProps, {})(PostList);
