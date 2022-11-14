import React from 'react'

const index = () => {
  return (
    // Import into the home page. Will be a sticky nav bar
    <div>
      {/* Navbar background to be blue maybe 500? Also perhaps transparent. the buttons will be 400 and w/ hover focus 600 */}
      <div className="nav-container">
        <nav className="nav">
          {/* Need a temp image in the meantime, temp image to be in the left hand side */}
          <ul className="list-none">
            {/* Options will be on the right hand side padding on left/right 10px and top/bottom 10px */}
            <li>Home</li>
            <li>About</li>
            <li>Request Quote</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default index;