import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
         {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">  original*/}
         {/* for to make navbar dark or light  */}
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.about}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

//   ###Types of props regular and default### 

//   to use string only  title and about 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

// you use default prps as well 
// Navbar.defaultProps = {
//     title:'set the title name',
//     about: 'set the about me '
// };




// note 
// 1) use of props and its types 
//    a) normal props and
//    b) default props 

//bootstrap
// btn btn-primary = blue color
// btn btn-denger = red color
// btn btn-success = green color
//btn btn-outline-success = show green color when mouse is moved there

