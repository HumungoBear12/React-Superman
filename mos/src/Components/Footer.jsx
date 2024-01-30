import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="one">
          <h2>Superman</h2>
          <hr />
          <div>
            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-twitter-outline-256.png" alt="Twitter" />
            <img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-256.png" alt="Github" />
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png" alt="LinkedIn" />
          </div>
        </div>
        <div className='two'>
          <h3>My Superman Website</h3>
        </div>
        <div className='tee'>
          <h3>@ 2024 Andrew Makris</h3>
        </div>
    </div>
  )
}

export default Footer