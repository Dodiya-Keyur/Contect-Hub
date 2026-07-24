import "./Settings.css";
import {
    FaUserEdit,
    FaLock,
    FaMoon,
    FaTrashAlt,
    FaSignOutAlt,
    FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/login");
    };

    const handleDeletePosts = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete all posts?"
        );

        if (confirmDelete) {
            localStorage.removeItem("posts");
            window.location.reload();
        }
    };

    return (
        <div className="settings-page">

            <div className="settings-card">

                <h2>Settings</h2>
                <p>Manage your account and application settings.</p>

                <div className="settings-list">

                    {/* Edit Profile */}

                    <div
                        className="setting-item"
                        onClick={() => navigate("/edit-profile")}
                    >
                        <div className="setting-left">
                            <FaUserEdit className="setting-icon" />
                            <span>Edit Profile</span>
                        </div>

                        <FaChevronRight />
                    </div>

                    {/* Change Password */}

                    <div className="setting-item">
                        <div className="setting-left">
                            <FaLock className="setting-icon" />
                            <span>Change Password</span>
                        </div>

                        <FaChevronRight />
                    </div>

                    {/* Dark Mode */}

                    <div className="setting-item">
                        <div className="setting-left">
                            <FaMoon className="setting-icon" />
                            <span>Dark Mode</span>
                        </div>

                        <FaChevronRight />
                    </div>

                    {/* Delete Posts */}

                    <div
                        className="setting-item danger"
                        onClick={handleDeletePosts}
                    >
                        <div className="setting-left">
                            <FaTrashAlt className="setting-icon" />
                            <span>Delete All Posts</span>
                        </div>

                        <FaChevronRight />
                    </div>

                    {/* Logout */}

                    <div
                        className="setting-item logout"
                        onClick={handleLogout}
                    >
                        <div className="setting-left">
                            <FaSignOutAlt className="setting-icon" />
                            <span>Logout</span>
                        </div>

                        <FaChevronRight />
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Settings;