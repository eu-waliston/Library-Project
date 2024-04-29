import React from "react";
import "./Home.scss";
import 'animate.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home-Container">
            <div className="rigth__side">
                <h1>Magic Library</h1>
                <h3 className="home__h1">
                    Where every page is a new Adventure
                </h3>
                <div className="search--area animate__animated animate__bounce animate__delay-2s animate__slow animate__infinite">
                    <Link className="btn__mbks" to={"/magic-labrary/front/login"}>My Books</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
