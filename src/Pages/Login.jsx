import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Auth.css";
import {
    Link,
    Navigate,
    useNavigate,
} from "react-router-dom";
import { useContext, useState } from "react";

import { UserContext } from "../store/User-store";

function Login() {

    const navigate = useNavigate();

    const { loginUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (localStorage.getItem("isLoggedIn") === "true") {
        return <Navigate to="/" replace />;
    }

    const handleLogin = (e) => {

        e.preventDefault();

        const savedUser = JSON.parse(
            localStorage.getItem("user")
        );

        if (!savedUser) {
            alert("No account found. Please register first.");
            navigate("/registration");
            return;
        }

        if (email !== savedUser.email) {
            alert("Incorrect Email.");
            return;
        }

        if (password !== savedUser.password) {
            alert("Incorrect Password.");
            return;
        }

        /* Login */

        loginUser(savedUser);

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );

        alert(`Welcome ${savedUser.name}!`);

        navigate("/");

    };

    return (

        <div className="auth-page">

            <div className="auth-card">

                <div className="text-center mb-4">

                    <h2>Welcome Back</h2>

                    <p>
                        Login to continue to your account
                    </p>

                </div>

                <form onSubmit={handleLogin}>

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
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                        </div>

                    </div>

                    {/* Remember */}

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <div className="form-check">

                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="remember"
                            />

                            <label
                                className="form-check-label"
                                htmlFor="remember"
                            >
                                Remember Me
                            </label>

                        </div>

                        <a
                            href="#"
                            className="forgot-link"
                        >
                            Forgot Password?
                        </a>

                    </div>

                    {/* Login */}

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                    {/* Footer */}

                    <div className="auth-footer">

                        Don't have an account?

                        <Link
                            to="/registration"
                            className="ms-1"
                        >
                            Register
                        </Link>

                    </div>

                </form>

            </div>

        </div>

    );
}

export default Login;