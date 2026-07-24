import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";

import App from "./App.jsx";

import PostLists from "./Pages/PostLists.jsx";
import CreatePost from "./Pages/CreatePost.jsx";
import About from "./Pages/About.jsx";
import Settings from "./Pages/Settings.jsx";
import EditProfile from "./Pages/EditProfile.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import UserProvider from "./store/User-store.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<App />
			</ProtectedRoute>
		),

		children: [
			{
				index: true,
				element: <PostLists />,
			},

			{
				path: "create-post",
				element: <CreatePost />,
			},

			{
				path: "about",
				element: <About />,
			},

			{
				path: "settings",
				element: <Settings />,
			},

			{
				path: "edit-profile",
				element: <EditProfile />,
			},
		],
	},

	{
		path: "/login",
		element: <Login />,
	},

	{
		path: "/registration",
		element: <Register />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>

		<UserProvider>

			<RouterProvider router={router} />

		</UserProvider>

	</StrictMode>
);