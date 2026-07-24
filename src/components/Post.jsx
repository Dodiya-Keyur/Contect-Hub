import { useContext, useState } from "react";
import "./Post.css";
import { PostList } from "../store/PostList-store";
import { CiSquareRemove } from "react-icons/ci";

function Post({ post, index }) {
    const { deletPost } = useContext(PostList);

    const [postLike, setPostLike] = useState(0);
    const [postComment, setPostComment] = useState(0);
    const [postShare, setPostShare] = useState(0);

    const LikeCounter = () => {
        setPostLike((prev) => prev + 1);
    };

    const CommentCounter = () => {
        setPostComment((prev) => prev + 1);
    };

    const ShareCounter = () => {
        setPostShare((prev) => prev + 1);
    };

    return (
        <div className="post-container">

            {/* ==========================
                Header
            ========================== */}

            <div className="post-header">

                <img
                    className="post-profile-img"
                    src={post.profileImage || "https://github.com/mdo.png"}
                    alt={post.userName || "User"}
                />

                <div className="post-user-info">

                    <h4 className="post-user-name">
                        {post.userName || "Guest User"}
                    </h4>

                    <div className="post-user-details">

                        <span className="post-profession">
                            {post.profession || "Software Developer"}
                        </span>

                        <span className="post-dot">•</span>

                        <span className="post-date">
                            {post.Date}
                        </span>

                    </div>

                </div>

                <button
                    className="post-delete-btn"
                    onClick={() => deletPost(index)}
                    title="Delete Post"
                >
                    <CiSquareRemove className="post-remove-icon" />
                </button>

            </div>

            {/* ==========================
                Caption
            ========================== */}

            {post.Caption && (
                <div className="post-caption">
                    <p>{post.Caption}</p>
                </div>
            )}

            {/* ==========================
                Image
            ========================== */}

            {post.Image && (
                <div className="post-image">
                    <img
                        src={post.Image}
                        alt="Post"
                    />
                </div>
            )}

            {/* ==========================
                Location
            ========================== */}

            {post.Location && (
                <div className="post-location">
                    <p>📍 {post.Location}</p>
                </div>
            )}

            {/* ==========================
                Tags
            ========================== */}

            {post.Tags && (
                <div className="post-tags">
                    <p>{post.Tags}</p>
                </div>
            )}

            {/* ==========================
                Stats
            ========================== */}

            <div className="post-stats">

                <span className="post-stat-item">
                    ❤️ {postLike} Likes
                </span>

                <span className="post-stat-item">
                    💬 {postComment} Comments
                </span>

                <span className="post-stat-item">
                    📤 {postShare} Shares
                </span>

            </div>

            {/* ==========================
                Actions
            ========================== */}

            <div className="post-actions">

                <button
                    className="post-action-btn"
                    onClick={LikeCounter}
                >
                    ❤️ Like
                </button>

                <button
                    className="post-action-btn"
                    onClick={CommentCounter}
                >
                    💬 Comment
                </button>

                <button
                    className="post-action-btn"
                    onClick={ShareCounter}
                >
                    📤 Share
                </button>

            </div>

        </div>
    );
}

export default Post;