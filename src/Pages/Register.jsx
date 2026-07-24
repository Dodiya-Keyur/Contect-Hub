import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaPhoneAlt,
} from "react-icons/fa";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../store/User-store";

function Register() {
    const navigate = useNavigate();
    const { loginUser } = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        if (!name || !email || !mobile || !password || !confirmPassword) {
            alert("Please fill all fields.");
            return;
        }

        // Mobile number validation
        if (!/^\d{10}$/.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            name,
            email,
            mobile,
            password,
            profession: "Software Developer",
            bio: "Welcome to my profile!",
            location: "India",
            profileImage: "https://github.com/mdo.png",
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        loginUser(user);

        alert("Registration Successful!");

        navigate("/");
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="text-center mb-4">
                    <h2>Create Account</h2>
                    <p>Join our community today</p>
                </div>

                <form onSubmit={handleRegister}>
                    {/* Name */}
                    <div className="mb-3">
                        <label className="form-label">
                            Full Name
                        </label>

                        <div className="input-group">
                            <span className="input-group-text">
                                <FaUser />
                            </span>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                        <label className="form-label">
                            Email Address
                        </label>

                        <div className="input-group">
                            <span className="input-group-text">
                                <FaEnvelope />
                            </span>

                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="mb-3">
                        <label className="form-label">
                            Mobile Number
                        </label>

                        <div className="input-group">
                            <span className="input-group-text">
                                <FaPhoneAlt />
                            </span>

                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter your mobile number"
                                maxLength={10}
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(
                                        e.target.value.replace(/\D/g, "")
                                    )
                                }
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <div className="input-group">
                            <span className="input-group-text">
                                <FaLock />
                            </span>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Create password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="form-label">
                            Confirm Password
                        </label>

                        <div className="input-group">
                            <span className="input-group-text">
                                <FaLock />
                            </span>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                                required
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Create Account
                    </button>

                    {/* Footer */}
                    <div className="auth-footer">
                        Already have an account?
                        <Link
                            to="/login"
                            className="ms-1"
                        >
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;