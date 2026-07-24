import "./App.css";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import PostListProvider from "./store/PostList-store";
import { UserContext } from "./store/User-store";

function App() {

	const navigate = useNavigate();

	const { logoutUser } = useContext(UserContext);

	const [selectedTab, setselectedTab] = useState("Home");
	const [Searchresult, setSearchresult] = useState("");
	const [isOpen, setIsOpen] = useState(true);

	/* ==========================
	   Logout
	========================== */

	const handleLogout = () => {

		logoutUser();

		navigate("/login");

	};

	return (

		<PostListProvider>

			<div className="app">

				<Sidebar
					selectedTab={selectedTab}
					setselectedTab={setselectedTab}
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					handleLogout={handleLogout}
				/>

				<div className={`main ${isOpen ? "main-open" : "main-close"}`}>

					<Header
						selectedTab={selectedTab}
						setselectedTab={setselectedTab}
						isOpen={isOpen}
						setSearchresult={setSearchresult}
					/>

					<div className="post-list">

						<Outlet
							context={{
								Searchresult,
							}}
						/>

					</div>

					<Footer
						selectedTab={selectedTab}
						setselectedTab={setselectedTab}
						isOpen={isOpen}
					/>

				</div>

			</div>

		</PostListProvider>

	);
}

export default App;