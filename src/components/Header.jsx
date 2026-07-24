import "./Header.css";
import logo from "../assets/ContectHub.png";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../store/User-store";

const Header = ({
    isOpen,
    setSearchresult,
}) => {

    const { user } = useContext(UserContext);

    const handleOnChange = (event) => {
        setSearchresult(event.target.value);
    };

    return (

        <header
            className={`header ${isOpen ? "header-open" : "header-close"}`}
        >

            {/* ==========================
                Logo
            ========================== */}

            <Link
                to="/"
                className="header-logo"
            >
                <img
                    src={logo}
                    alt="ContentHub Logo"
                />
            </Link>

            {/* ==========================
                Navigation
            ========================== */}

            <ul className="header-links">

                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/create-post">
                        Create Post
                    </Link>
                </li>

                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>

            </ul>

            {/* ==========================
                Right Side
            ========================== */}

            <div className="header-right">

                {/* Search */}

                <div className="search-box">

                    <i className="fa-solid fa-magnifying-glass"></i>

                    <input
                        type="text"
                        placeholder="Search posts..."
                        onChange={handleOnChange}
                    />

                </div>

                {/* User */}

                {user ? (

                    <div className="header-user">

                        <img
                            src={
                                user.profileImage ||
                                "https://github.com/mdo.png"
                            }
                            alt="Profile"
                            className="header-user-image"
                        />

                        <div className="header-user-info">

                            <h5>
                                {user.name || "Guest"}
                            </h5>

                            <small>
                                {user.profession || "Software Developer"}
                            </small>

                        </div>

                    </div>

                ) : (

                    <>
                        <Link to="/login">
                            <button className="login-btn">
                                Login
                            </button>
                        </Link>

                        <Link to="/registration">
                            <button className="signup-btn">
                                Sign Up
                            </button>
                        </Link>
                    </>

                )}

            </div>

        </header>

    );
};

export default Header;