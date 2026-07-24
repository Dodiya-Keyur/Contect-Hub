import { useContext, useRef } from "react";
import { PostList } from "../store/PostList-store";
import "./CreatePost.css";

const CreatePost = () => {
    const { addPost } = useContext(PostList);

    const ImageElement = useRef();
    const CaptionElement = useRef();
    const LocationElement = useRef();
    const TagsElement = useRef();

    const handelOnclick = (event) => {
        event.preventDefault();

        const file = ImageElement.current.files[0];

        if (!file) {
            alert("Please select an image.");
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            const Image = reader.result; // Base64 Image

            const Caption = CaptionElement.current.value;
            const Location = LocationElement.current.value;
            const Tags = TagsElement.current.value;

            addPost(Image, Caption, Location, Tags);

            // Clear Form
            ImageElement.current.value = "";
            CaptionElement.current.value = "";
            LocationElement.current.value = "";
            TagsElement.current.value = "";
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="create-post">

            <h2>Create New Post</h2>

            <form onSubmit={handelOnclick}>

                {/* User */}

                <div className="user-info">
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="Profile"
                    />

                    <div>
                        <h4>Keyur</h4>
                        <p>Software Developer</p>
                    </div>
                </div>

                {/* Upload Image */}

                <div className="form-group">
                    <label>Upload Image</label>

                    <input
                        ref={ImageElement}
                        type="file"
                        accept="image/*"
                        required
                    />
                </div>

                {/* Caption */}

                <div className="form-group">
                    <label>Caption</label>

                    <textarea
                        ref={CaptionElement}
                        placeholder="What's on your mind?"
                        rows="2"
                    ></textarea>
                </div>

                {/* Location */}

                <div className="form-group">
                    <label>Location</label>

                    <input
                        ref={LocationElement}
                        type="text"
                        placeholder="Ahmedabad, India"
                    />
                </div>

                {/* Tags */}

                <div className="form-group">
                    <label>Tags</label>

                    <input
                        ref={TagsElement}
                        type="text"
                        placeholder="#react #coding #travel"
                    />
                </div>

                {/* Privacy */}

                <div className="form-group">
                    <label>Privacy</label>

                    <select>
                        <option>Public</option>
                        <option>Friends</option>
                        <option>Private</option>
                    </select>
                </div>

                {/* Submit */}

                <button
                    className="post-btn"
                    type="submit"
                >
                    Create Post
                </button>

            </form>

        </div>
    );
};

export default CreatePost;