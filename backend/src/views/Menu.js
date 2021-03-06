import React from 'react'
import {Link, withRouter} from 'react-router-dom'


const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: 'yellow'}
    }
    else {
        return {color: 'rgba(255, 255, 255, 0.5)'}
    }
}


const Menu = ({history}) => {
  return (
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="true" data-target="#collapseLayouts" aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
                Danh mục
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse show" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                    Dashboard
                  </Link>
                  <Link className="nav-link" style={isActive(history, '/admin/product/productsearch')} to="/admin/product/productsearch">
                    <div className="sb-nav-link-icon"><i className="fas fa-th" /></div>
                    Sản phẩm
                  </Link>
                </nav>
              </div>
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
                Pages
                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
              </a>
              <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                  <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                    Authentication
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="login.html">Login</a>
                      <a className="nav-link" href="register.html">Register</a>
                      <a className="nav-link" href="password.html">Forgot Password</a>
                    </nav>
                  </div>
                  <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                    Error
                    <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="401.html">401 Page</a>
                      <a className="nav-link" href="404.html">404 Page</a>
                      <a className="nav-link" href="500.html">500 Page</a>
                    </nav>
                  </div>
                </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <a className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
                Charts
              </a>
              <a className="nav-link" href="tables.html">
                <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
                Tables
              </a>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default withRouter(Menu)
