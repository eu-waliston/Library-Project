import React from "react";
import "./Home.css";
import { CiStar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Home = () => {
    return (
        <div className="Home-Container">
            <div className="rigth__side">
                <p className="home__p">
                <CiStar className="star__icon"/>
                Start your reading journey today
                </p>
                <h1 className="home__h1">
                    Where every page is a new Adventure
                </h1>
                <div className="search--area">
                    <CiSearch className="icon__search"/>
                    <input className="input__area" type="text" placeholder="Search Books"/>
                </div>
            </div>
            <div className="left__side">
                <img src="./images/home__img.png" alt="icon" />
            </div>
        </div>
    )
}

export default Home;
