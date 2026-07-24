import { createContext, useReducer, useEffect } from "react";

export const PostList = createContext({
    postLists: [],
    addPost: () => { },
    deletPost: () => { },
});

/* ==========================
   Default Posts
========================== */

const DefaultPosts = [
    {
        userName: "Marvel",
        profession: "Movie Studio",
        profileImage: "https://d23.com/app/uploads/2013/04/Marvel-Entertainment-1180x600.jpg",

        Image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UIyixs7qcJiDN4T9P5D2gIr5YB-Yz98SImZ5NmT2bg&s=10",
        Caption: "IronMan Still Alive In All Hearts",
        Location: "India",
        Tags: "#IronMan #Marvel #InfinityWar #Avengers",
        Date: new Date().toLocaleDateString(),
    },

    {
        userName: "Marvel",
        profession: "Movie Studio",
        profileImage: "https://d23.com/app/uploads/2013/04/Marvel-Entertainment-1180x600.jpg",

        Image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqN4FWwpiieD-ugxkpCGd46DAAlH9tVZ70cF6M87_fIg&s=10",
        Caption:
            "Robert Downey Jr. will play Doctor Doom",
        Location: "India",
        Tags: "#DoctorDoom #Marvel #Avengers",
        Date: new Date().toLocaleDateString(),
    },

    {
        userName: "Mercedes",
        profession: "Car Company",
        profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnavXX0P9nP4QHkylo-NoMr1Sd9-O0d0xngf9A6nV9Tw&s=10",

        Image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxHCKYyvtNf8yoAEWDE1VT2311klINb4NFZlXJRQUAsityfma_",
        Caption: "This is a Mercedes AMG GT Made By Mercedes.",
        Location: "India",
        Tags: "#Mercedes #MercedesAmgGt #Car",
        Date: new Date().toLocaleDateString(),
    },
];

/* ==========================
   Load Posts
========================== */

const loadPosts = () => {
    const savedPosts = localStorage.getItem("posts");

    if (savedPosts) {
        return JSON.parse(savedPosts);
    }

    return DefaultPosts;
};

/* ==========================
   Reducer
========================== */

const postListReducer = (state, action) => {
    switch (action.type) {
        case "ADD_POST":
            return [action.payload, ...state];

        case "DELETE_POST":
            return state.filter(
                (_, index) => index !== action.payload.IndexId
            );

        default:
            return state;
    }
};

/* ==========================
   Provider
========================== */

const PostListProvider = ({ children }) => {

    const [postLists, dispatchPostList] = useReducer(
        postListReducer,
        [],
        loadPosts
    );

    /* Save Posts */

    useEffect(() => {
        localStorage.setItem(
            "posts",
            JSON.stringify(postLists)
        );
    }, [postLists]);

    /* Add Post */

    const addPost = (
        Image,
        Caption,
        Location,
        Tags
    ) => {

        if (!Image) {
            alert("Please upload an image.");
            return;
        }

        const user = JSON.parse(
            localStorage.getItem("user")
        );

        dispatchPostList({
            type: "ADD_POST",
            payload: {

                userName: user?.name || "Guest User",

                profession:
                    user?.profession ||
                    "Software Developer",

                profileImage:
                    user?.profileImage ||
                    "https://github.com/mdo.png",

                Image,
                Caption,
                Location,
                Tags,

                Date:
                    new Date().toLocaleDateString(),
            },
        });

    };

    /* Delete Post */

    const deletPost = (IndexId) => {

        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                IndexId,
            },
        });

    };

    return (
        <PostList.Provider
            value={{
                postLists,
                addPost,
                deletPost,
            }}
        >
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;