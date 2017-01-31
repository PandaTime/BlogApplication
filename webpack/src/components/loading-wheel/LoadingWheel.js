import React from 'react';

class LoadingWheel extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
			<div className="container topic loading-box">
				<div className="loading"></div>
            </div>
        );
    }
}
export default LoadingWheel;