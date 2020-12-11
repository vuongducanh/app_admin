import React, {useState} from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { login } from './../../api/login'

const Login = (props) => {
  const [param, setParam] = useState({
    email: '',
    password: ''
  })

  const _responseFacebook = () => {
    localStorage.setItem('access_token', 'abc')

    // if (response.accessToken) {
      props.history.push('/dashboard')
    // }
  }

  const handleLogin = (e) => {
    _responseFacebook()
    // e.preventDefault()
    // login(param).then((res) => {
    //   if (res.data.access_token) {
    //     localStorage.setItem('access_token', res.data.access_token)
    //     props.history.push('/dashboard')
    //   }
    // }).catch((error) => {
    //   localStorage.setItem('access_token', "")
    //   throw error
    // })
  }

  const handleChangeEmail = (e) => {
    setParam({...param, email: e.target.value})
  }

  const handleChangePassWord = (e) => {
    setParam({...param, password: e.target.value})
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
            <form onSubmit={handleLogin}  method="POST" >
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email"  onChange={handleChangeEmail}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" onChange={handleChangePassWord} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>

              <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
