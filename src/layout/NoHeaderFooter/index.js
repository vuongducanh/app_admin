import React, { PureComponent } from 'react';
import './styles.scss';

class Main extends PureComponent {
  render() {

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
