import React from 'react';

function index() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="../../index3.html" className="brand-link">
        <img src="../../dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          />
        <span className="brand-text font-weight-light">Admin</span>
      </a>

      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item has-treeview">
              <a href="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/dashboard" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Dashboard v1</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/home" className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>
                  Home
                <span className="right badge badge-danger">New</span>
                </p>
              </a>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-copy"></i>
                <p>
                  Layout Options
                <i className="fas fa-angle-left right"></i>
                  <span className="badge badge-info right">6</span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="../layout/top-nav.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Top Navigation</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../layout/collapsed-sidebar.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Collapsed Sidebar</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default index;
