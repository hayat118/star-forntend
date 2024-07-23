import React from "react";


const Header =()=>{
    return(
        <div className="academy-container">
        <header className="header">
          <div className="logo">intract.</div>
          <nav className="nav">
            <a href="@">Compass</a>
            <a href="@">Explore</a>
            <a href="@" >Academy<span className="active">New</span></a>
            <a href="@">NFTs</a>
            <a href="@">For Projects</a>
          </nav>
          <div className="search-signin">
            <input type="text" placeholder="Search for ecosystems, trending quests etc." />
            <button>Sign In</button>
          </div>
        </header>
        </div>
    )
}
export default Header;