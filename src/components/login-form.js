import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
// import { Route } from 'react-router-dom';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './app.css';
import './style.css';
export class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      faq: false
    };
  }

  handleClick(e) {
    this.setState({
      faq: true
    });
  }

  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    if (this.state.faq) {
      return <Redirect to="/about" />;
    }

    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {error}
        <h1 className='headerFont'>Welcome to Rack Mapper</h1>
        <label className='loginLabel'>Username</label>
        <section htmlFor="username"></section>
        <Field
          component={Input}
          type="text"
          className='userInput'
          name="username"
          id="username"
          placeholder="Username"
          validate={[required, nonEmpty]}
        />
        <label className='loginLabel'>Password</label>
        <section htmlFor='password'></section>
        <Field
          component={Input}
          className='passwordInput'
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting} className="log-in">
          LOGIN
        </button><br />
        {/* <Route exact path="/register" component={RegistrationPage} className="w3-bar-item w3-button"/> */}
        <Link to="/register" className="sign-up w3-button">SIGN UP</Link>
        <a href="#about" className="w3-button" onClick={e => this.handleClick(e)}><i></i>  About the app</a>

      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
