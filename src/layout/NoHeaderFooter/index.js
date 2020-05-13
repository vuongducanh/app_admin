import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.scss';

class Main extends PureComponent {
  render() {
    if (this.props.location.pathname === '/') {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { from: this.props.location }
          }}
        />
      );
    }

    const { children } = this.props;
    return (
      <div className="main-web">
        <div id="container">
          <section id="main-body">
            <div className="gutter-example" id="main-container">
              {children}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
