import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';


class ErrorRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                Sorry, page was not found&nbsp;
                <Link to="/">Try this one!</Link>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

export default connect(mapStateToProps, {})(ErrorRoute);
