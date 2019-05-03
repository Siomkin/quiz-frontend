import React from 'react';

export class Spinner extends React.Component {
    render() {

        let text = this.props.children;

        return (
            <div className="text-center">
                <i className="fas fa-spinner fa-spin"/>
                {
                    text && (
                        <span>{text}</span>
                    )
                }
            </div>
        );
    }
}
