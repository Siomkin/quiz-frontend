import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderField} from "../../utils/form";
import {connect} from 'react-redux';
import {userLoginAttempt} from "../../actions/userActions";

const mapStateToProps = state => ({
    ...state.auth
});

const mapDispatchToProps = {
    userLoginAttempt
};

class LoginForm extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            this.props.history.push('/');
        }
    }

    onSubmit(values) {
        return this.props.userLoginAttempt(
            values.username,
            values.password
        );
    }

    render() {
        const {handleSubmit, error} = this.props;

        return (
            <div className="text">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="card mt-3 mb-6 shadow-sm">
                    <div className="card-body">
                        <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field name="username" label="Username" type="text" component={renderField}/>
                            <Field name="password" label="Password" type="password" component={renderField}/>
                            <button type="submit" className="btn btn-primary btn-big btn-block">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));