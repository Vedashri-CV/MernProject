import React from 'react'


const Navbar = () => {
  return (
    <div>

    <nav className="navbar">
        <div className="logo">YumBites</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="Plan">Plan</a>
          <a href="Diet">MyDiet</a>
          <a href="Blog">Blog</a>
        
          <a href="Sign">SignUp</a>
        </div>
      </nav> 
    </div>
  )
}

export default Navbar