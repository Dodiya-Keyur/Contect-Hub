import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
    user: null,
    loginUser: () => { },
    logoutUser: () => { },
    updateUser: () => { },
});

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    /* Load User */

    useEffect(() => {

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }

    }, []);

    /* Login */

    const loginUser = (userData) => {

        localStorage.setItem(
            "user",
            JSON.stringify(userData)
        );

        setUser(userData);
    };

    /* Logout */

    const logoutUser = () => {

        localStorage.removeItem("user");
        localStorage.removeItem("isLoggedIn");

        setUser(null);
    };

    /* Update Profile */

    const updateUser = (newData) => {

        const updatedUser = {
            ...user,
            ...newData,
        };

        localStorage.setItem(
            "user",
            JSON.stringify(updatedUser)
        );

        setUser(updatedUser);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                loginUser,
                logoutUser,
                updateUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;