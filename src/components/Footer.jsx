import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({
    selectedTab,
    setselectedTab,
    isOpen,
}) => {
    return (
        <footer className={`footer ${isOpen ? "footer-open" : "footer-close"}`}>
            <div className="footer-container">

                <div className="footer-logo">
                    <h2>Contect Hub</h2>
                    <p>Connect • Share • Inspire</p>
                </div>

                <ul className="footer-links">
                    <li onClick={() => setselectedTab("Home")}>
                        <Link href="/">Home</Link>
                    </li>

                    <li onClick={() => setselectedTab("Create Post")}>
                        <Link to="/create-Post">Create Post</Link>
                    </li>

                    <li>
                        <Link to="/">FAQs</Link>
                    </li>

                    <li onClick={() => setselectedTab("About Me")}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <p className="copyright">
                    © 2026 ContectHub. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;