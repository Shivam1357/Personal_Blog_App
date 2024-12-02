import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            setMessage("Title and Content are required");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            await axios.post("http://localhost:8080/api/posts", { title, content });
            setTitle("");
            setContent("");
            setMessage("🎉 Post created successfully!");
            setShowPopup(true);
        } catch (error) {
            console.error(error);
            setMessage("❌ Failed to create post.");
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.heading}>Create a New Blog Post</h1>
                {message && <p style={styles.message}>{message}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        placeholder="Enter Post Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={styles.input}
                        disabled={loading}
                    />
                    <textarea
                        placeholder="Write your content here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        style={styles.textarea}
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        style={{
                            ...styles.button,
                            backgroundColor: loading ? "#b0bec5" : "#007BFF",
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Create Post"}
                    </button>
                </form>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div style={styles.popupOverlay}>
                    <div style={styles.popup}>
                        <h2 style={styles.popupHeading}>Post Created Successfully!</h2>
                        <p style={styles.popupContent}>Your new post has been created.</p>
                        <button style={styles.closeButton} onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9fafb",
        padding: "20px",
    },
    card: {
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        padding: "30px",
        maxWidth: "500px",
        width: "100%",
        boxSizing: "border-box",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
        textAlign: "center",
    },
    message: {
        fontSize: "16px",
        color: "#ff4757",
        marginBottom: "10px",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        outline: "none",
        transition: "border-color 0.3s ease",
    },
    textarea: {
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        height: "150px",
        outline: "none",
        transition: "border-color 0.3s ease",
        resize: "none",
    },
    button: {
        padding: "12px",
        fontSize: "16px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    popup: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    popupHeading: {
        fontSize: "20px",
        marginBottom: "10px",
    },
    popupContent: {
        fontSize: "16px",
        marginBottom: "20px",
    },
    closeButton: {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
};

export default CreatePost;