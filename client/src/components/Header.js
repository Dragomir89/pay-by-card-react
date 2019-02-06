import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Payments from './Payments'


class Header extends Component{
    render(){
        return(
           <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to='/'>
                  Test paiments
                </Link>
                <div className="navbar-header">
                  <Payments/>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

export default Header;
