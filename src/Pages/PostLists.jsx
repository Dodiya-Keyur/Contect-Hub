import { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import { PostList } from "../store/PostList-store";
import Post from "../components/Post";
import NoPosts from "../components/NoPosts";

const PostLists = () => {
    const { postLists } = useContext(PostList);

    // Get search text from App.jsx
    const { Searchresult } = useOutletContext();

    // If there are no posts
    if (postLists.length === 0) {
        return <NoPosts />;
    }

    // Convert search text to lowercase and remove spaces
    const search = (Searchresult || "")
        .toLowerCase()
        .replace(/\s+/g, "");

    // Filter posts by Caption, Location and Tags
    const filteredPosts = postLists.filter((post) => {
        if (search === "") return true;

        const caption = String(post.Caption || "")
            .toLowerCase()
            .replace(/\s+/g, "");

        const location = String(post.Location || "")
            .toLowerCase()
            .replace(/\s+/g, "");

        const tags = Array.isArray(post.Tags)
            ? post.Tags.join(" ")
            : String(post.Tags || "");

        const tagText = tags
            .toLowerCase()
            .replace(/\s+/g, "");

        return (
            caption.includes(search) ||
            location.includes(search) ||
            tagText.includes(search)
        );
    });

    return (
        <>
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                    <Post
                        key={index}
                        post={post}
                        index={index}
                    />
                ))
            ) : (
                <h2
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                    }}
                >
                    No posts found.
                </h2>
            )}
        </>
    );
};

export default PostLists;