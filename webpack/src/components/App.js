// This component handles the App template used on every page.
import React from 'react';
import Header from './header-default/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props}/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
