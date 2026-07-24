import "./about.css";
import {
    FaUsers,
    FaImages,
    FaComments,
    FaHeart,
    FaLaptopCode,
    FaRocket,
    FaBullseye,
} from "react-icons/fa";

const About = () => {
    return (
        <div className="about-page">

            <div className="about-hero">
                <h1>About Contect Hub</h1>
                <p>
                    Connect with friends, share your moments, and discover amazing
                    content from people around the world.
                </p>
            </div>

            <div className="about-section">
                <div className="about-card">
                    <h2>Who We Are</h2>

                    <p>
                        Contect Hub is a modern social media platform built using React.
                        Users can create posts, upload photos, interact with content,
                        and connect with others through a clean and responsive interface.
                    </p>

                    <p>
                        Our goal is to provide a fast, secure, and enjoyable experience
                        while encouraging creativity and meaningful conversations.
                    </p>
                </div>
            </div>

            <h2 className="section-title">Platform Features</h2>

            <div className="features-grid">

                <div className="feature-card">
                    <FaImages className="feature-icon" />
                    <h3>Photo Sharing</h3>
                    <p>
                        Upload beautiful images and share your favorite memories.
                    </p>
                </div>

                <div className="feature-card">
                    <FaComments className="feature-icon" />
                    <h3>Real Discussions</h3>
                    <p>
                        Comment, interact and communicate with other users.
                    </p>
                </div>

                <div className="feature-card">
                    <FaHeart className="feature-icon" />
                    <h3>Likes</h3>
                    <p>
                        Show appreciation by liking posts from your community.
                    </p>
                </div>

                <div className="feature-card">
                    <FaUsers className="feature-icon" />
                    <h3>Community</h3>
                    <p>
                        Build connections with people sharing similar interests.
                    </p>
                </div>

            </div>

            <div className="mission-section">

                <div className="mission-card">
                    <FaBullseye className="mission-icon" />
                    <h3>Our Mission</h3>

                    <p>
                        To make sharing ideas, photos, and experiences simple,
                        enjoyable, and accessible for everyone.
                    </p>
                </div>

                <div className="mission-card">
                    <FaRocket className="mission-icon" />
                    <h3>Our Vision</h3>

                    <p>
                        To become a platform where creativity, communication,
                        and technology come together.
                    </p>
                </div>

            </div>

            <div className="developer-card">

                <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Developer"
                />

                <div>
                    <h2>Developer</h2>
                    <h3>Keyur Dodiya</h3>
                    <p>Computer Science Engineering Student</p>

                    <p>
                        Passionate about Web Development, React, JavaScript,
                        and creating modern user-friendly applications.
                    </p>

                    <button className="contact-btn">
                        Contact Developer
                    </button>
                </div>

            </div>

            <div className="stats-section">

                <div className="stat-box">
                    <h2>10K+</h2>
                    <p>Users</p>
                </div>

                <div className="stat-box">
                    <h2>50K+</h2>
                    <p>Posts</p>
                </div>

                <div className="stat-box">
                    <h2>100K+</h2>
                    <p>Likes</p>
                </div>

                <div className="stat-box">
                    <h2>24/7</h2>
                    <p>Support</p>
                </div>

            </div>

            <footer className="about-footer">
                © 2026 ContectHub. All Rights Reserved.
            </footer>

        </div>
    );
};

export default About;