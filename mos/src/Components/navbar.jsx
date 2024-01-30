import React from 'react'

const navbar = () => {
  return (
    <div className="navbar-container">
        <h1 className="header">SUPERMAN</h1>
        {/* <hr/> */}
        <ul className='nav-flex'>
            <li className="nav-item"><a href="">Superman</a></li>
            <li className="nav-item"><a href="">TimeLine</a></li>
            <li className="nav-item"><a href="">Justice-League</a></li>
            <li className="nav-item"><a href="">Current-Superman</a></li>
        </ul>
    </div>
  )
}

export default navbar