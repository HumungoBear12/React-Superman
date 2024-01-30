import React from 'react'

const navbar = () => {
  return (
    <div className="navbar-container">
        <h2 className="header">SUPERMAN</h2>
        <ul className='nav-flex'>
            <li className="nav-item"><a href="#superman">Superman</a></li>
            <li className="nav-item"><a href="#timeline">Timeline</a></li>
            <li className="nav-item"><a href="#super">Justice-League</a></li>
            <li className="nav-item"><a href="#david">David Cornsweet</a></li>
        </ul>
    </div>
  )
}

export default navbar