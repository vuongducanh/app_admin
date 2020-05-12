import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';
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
        <Header />
        <SideBar/>

        <div className="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              {children}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
