import React from "react";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import {userRegister} from "../../../store/user/userActions";
import {renderField} from "../../../utils/form";

const mapDispatchToProps = {
    userRegister
};

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {termsAccepted: false};
    }

    onSubmit(values) {
        return this.props.userRegister(...Object.values(values))
            .then(() => {
                this.props.reset();
            });
    }

    onTermsAcceptedClick(e) {
        this.setState(prevState => ({termsAccepted: !prevState.termsAccepted}));
    }

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="email" label="E-mail:" type="text" component={renderField}/>
                        <Field name="name" label="Full name:" type="text" component={renderField}/>

                        <Field name="password" label="Password:" type="password" component={renderField}/>
                        <Field name="retypedPassword" label="Re-type password:" type="password"
                               component={renderField}/>


                        <div className="form-check form-group">
                            <input className="form-check-input" type="checkbox" id="TermsAccepted"
                                   value={false}
                                   onClick={this.onTermsAcceptedClick.bind(this)}/>
                            <label className="form-check-label"  htmlFor="TermsAccepted">I agree to the terms and conditions</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-big btn-block"
                                disabled={submitting || !this.state.termsAccepted}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'RegisterForm'
})(connect(null, mapDispatchToProps)(RegisterForm));
