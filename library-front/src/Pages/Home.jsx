import React from "react";
import "./Home.scss";
import logo from './Yg6I.gif'

const Home = () => {
    return (
        <div className="Home-Container">
            <div className="rigth__side">
                <h1>Magic Library</h1>
                <h3 className="home__h1">
                    Where every page is <br /> a new Adventure
                </h3>
                <div className="search--area">
                    <button className="btn__mbks">My Books</button>
                </div>
            </div>
            <div className="left__side">
                <img src={logo} alt="icon" className="logo"/>
            </div>
        </div>
    )
}

export default Home;
