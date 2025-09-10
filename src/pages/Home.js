import React from "react";
import "./Home.css"

function Home(){
    return(
        <div id="HOME">
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/burger.png`} alt="main-photo" className="main-photo"></img>
            </div>
            <div className="text-main">
                <h2 className="h-main  animate">وهمي</h2>
                <p className="p-main  animate animate2"><i className="fa-solid fa-rocket"></i>  ...طعم من الخياال</p>
            </div>
        </div>
    )
}

export default Home;

