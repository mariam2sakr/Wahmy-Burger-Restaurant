import React from "react";
import "./About.css"

function About(){
    return(
        <div id="ABOUT">
            <h2 className="h-footer">About Us</h2>
            <span className="p-footer">
                Started in 11 May 2024, <strong style={{color:"bisque"}}>Wahmy Burger</strong> began with a simple idea:<br></br>
                bringing fresh, juicy burgers with a homemade touch. Our recipes have
                been passed down through generations and perfected <br></br> by our chefs to
                deliver the best flavor in town.
            </span><br></br>
            <img src="/images/flying-astronaut.png" alt="flying astronaut" className="img-footer"></img>
            <p className="Rights"> &copy; All Rights Reserved by Wahmy Burger</p>
        </div>
    )
}

export default  About;