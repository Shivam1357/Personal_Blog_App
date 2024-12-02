import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        // Fetch posts from the backend
        axios
            //.get("http://34.28.253.47:8080/api/posts")
            .get("http://localhost:8080/api/posts")
            .then((response) => {
                setPosts(response.data);
                setIsLoading(false); 
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false); 
            });
    }, []);

    const truncateContent = (content, limit = 100) => {
        return content.length > limit ? `${content.substring(0, limit)}...` : content;
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>All Blog Posts</h1>
            {isLoading ? (
                <div style={styles.loading}>
                    <div className="spinner"></div> {/* Simple loading spinner */}
                    <p>Loading posts...</p>
                </div>
            ) : posts.length ? (
                posts.map((post) => (
                    <div key={post.id} style={styles.post}>
                        <h2 style={styles.title}>
                            <Link to={`/posts/${post.id}`} style={styles.link}>
                                {post.title}
                            </Link>
                        </h2>
                        <p style={styles.meta}>
                            <strong>ID:</strong> {post.id} | <strong>Date:</strong>{" "}
                            {new Date(post.created_at).toLocaleString()}
                        </p>
                        <p style={styles.content}>
                            {truncateContent(post.content)}
                        </p>
                        {post.content.length > 100 && (
                            <Link to={`/posts/${post.id}`} style={styles.readMore}>
                                Read More
                            </Link>
                        )}
                    </div>
                ))
            ) : (
                <p style={styles.noPosts}>No posts available.</p>
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
    heading: {
        textAlign: "center",
        fontSize: "32px",
        color: "#333",
        marginBottom: "20px",
    },
    post: {
        backgroundColor: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        marginBottom: "20px",
    },
    title: {
        fontSize: "24px",
        marginBottom: "10px",
    },
    link: {
        textDecoration: "none",
        color: "#007BFF",
        transition: "color 0.3s ease",
    },
    meta: {
        fontSize: "14px",
        color: "#555",
        marginBottom: "10px",
    },
    content: {
        fontSize: "16px",
        color: "#333",
        marginBottom: "10px",
    },
    readMore: {
        display: "inline-block",
        fontSize: "14px",
        color: "#007BFF",
        textDecoration: "none",
        transition: "color 0.3s ease",
    },
    noPosts: {
        textAlign: "center",
        color: "#888",
    },
    loading: {
        textAlign: "center",
        fontSize: "18px",
        color: "#555",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default BlogList;
