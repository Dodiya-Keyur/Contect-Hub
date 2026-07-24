import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfile.css";

function EditProfile() {
    const navigate = useNavigate();

    const [profileImage, setProfileImage] = useState(
        "https://github.com/mdo.png"
    );
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            setProfileImage(user.profileImage || "https://github.com/mdo.png");
            setName(user.name || "");
            setProfession(user.profession || "");
            setBio(user.bio || "");
            setLocation(user.location || "");
        }
    }, []);

    const handleImage = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user")) || {};

        const updatedUser = {
            ...user,
            profileImage,
            name,
            profession,
            bio,
            location,
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Profile Updated Successfully!");

        navigate("/settings");
    };

    return (
        <div className="edit-profile-page">

            <div className="edit-profile-card">

                <h2>Edit Profile</h2>

                <form onSubmit={handleSubmit}>

                    {/* Profile Image */}

                    <div className="profile-image-box">

                        <img
                            src={profileImage}
                            alt="Profile"
                        />

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImage}
                        />

                    </div>

                    {/* Name */}

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            placeholder="Enter your name"
                        />

                    </div>

                    {/* Profession */}

                    <div className="form-group">

                        <label>Profession</label>

                        <input
                            type="text"
                            value={profession}
                            onChange={(e) =>
                                setProfession(e.target.value)
                            }
                            placeholder="Software Developer"
                        />

                    </div>

                    {/* Bio */}

                    <div className="form-group">

                        <label>Bio</label>

                        <textarea
                            rows="4"
                            value={bio}
                            onChange={(e) =>
                                setBio(e.target.value)
                            }
                            placeholder="Tell us about yourself..."
                        />

                    </div>

                    {/* Location */}

                    <div className="form-group">

                        <label>Location</label>

                        <input
                            type="text"
                            value={location}
                            onChange={(e) =>
                                setLocation(e.target.value)
                            }
                            placeholder="Ahmedabad, India"
                        />

                    </div>

                    {/* Buttons */}

                    <div className="button-group">

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/settings")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Save Changes
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default EditProfile;