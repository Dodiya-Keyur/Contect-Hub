import {
    HiOutlineBars3,
    HiHome,
    HiPlusCircle,
    HiUserGroup,
    HiArrowRightOnRectangle,
    HiCog6Tooth,
} from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../store/User-store";

import "./Sidebar.css";

const Sidebar = ({
    isOpen,
    setIsOpen,
    handleLogout,
}) => {

    const { user } = useContext(UserContext);

    return (
        <div className={`sidebar ${isOpen ? "open" : "close"}`}>

            {/* ==========================
                Logo
            ========================== */}

            <div className="logo">

                <button
                    className="sideBarBtn"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <HiOutlineBars3 size={30} />
                </button>

                {isOpen && <h4>Contect Hub</h4>}

            </div>

            <hr />

            {/* ==========================
                Menu
            ========================== */}

            <ul className="menu">

                <li>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <HiHome />
                        {isOpen && <span>Home</span>}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/create-post"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <HiPlusCircle />
                        {isOpen && <span>Create Post</span>}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <HiUserGroup />
                        {isOpen && <span>About</span>}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        <HiCog6Tooth />
                        {isOpen && <span>Settings</span>}
                    </NavLink>
                </li>

            </ul>

            {/* ==========================
                User
            ========================== */}

            <div className="sidebar-user">

                <div className="sidebar-user-left">

                    <img
                        src={
                            user?.profileImage ||
                            "https://github.com/mdo.png"
                        }
                        alt="Profile"
                        className="sidebar-user-image"
                    />

                    {isOpen && (

                        <div className="sidebar-user-info">

                            <h5 className="sidebar-user-name">
                                {user?.name || "Guest User"}
                            </h5>

                            <small className="sidebar-user-role">
                                {user?.profession || "Software Developer"}
                            </small>

                        </div>

                    )}

                </div>

                <button
                    className="sidebar-logout-btn"
                    onClick={handleLogout}
                    title="Logout"
                >

                    <HiArrowRightOnRectangle
                        className="sidebar-logout-icon"
                    />

                    {isOpen && (
                        <span className="sidebar-logout-text">
                            Logout
                        </span>
                    )}

                </button>

            </div>

        </div>
    );
};

export default Sidebar;