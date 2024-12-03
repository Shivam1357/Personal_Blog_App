import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios
            .get(`http://34.28.253.47/api/posts/${id}`)
            // .get(`http://localhost:8080/api/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <div style={styles.container}>
            {post ? (
                <div style={styles.post}>
                    <h1 style={styles.title}>{post.title}</h1>
                    <p style={styles.meta}>
                        <strong>ID:</strong> {post.id} | <strong>Date:</strong> {new Date(post.created_at).toLocaleString()}
                    </p>
                    <p style={styles.content}>{post.content}</p>
                </div>
            ) : (
                <p style={styles.loading}>Loading post...</p>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
    },
    post: {
        backgroundColor: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
    },
    title: {
        fontSize: "32px",
        marginBottom: "10px",
    },
    meta: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "20px",
    },
    content: {
        fontSize: "18px",
        color: "#333",
    },
    loading: {
        textAlign: "center",
        color: "#888",
    },
};

export default PostDetails;
