import React from 'react';

export class Spinner extends React.Component {
    render() {

        const {spin} = this.props;
        let text = this.props.children;

        if (spin !== false) {
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

        return ('');

    }
}
