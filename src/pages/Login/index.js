import React from 'react';
import './styles.scss';
import FacebookLogin from 'react-facebook-login'
import { Link } from 'react-router-dom';

const Login = (props) => {
  const responseFacebook = (response) => {
    console.log('response =', response);
    localStorage.setItem('access_token', response.accessToken)

    if (response.accessToken) {
      props.history.push('/dashboard')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <div><b>Admin</b></div>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Remember Me
              </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              {/* <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a> */}
              <FacebookLogin
              appId="238845014106501" //APP ID NOT CREATED YET
              fields="name,email,picture"
              autoLoad={true}
              callback={responseFacebook}
            />
              {/* <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a> */}
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">

            <Link to={'/register'}>Register a new membership</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
