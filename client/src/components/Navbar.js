import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/new" style={styles.link}>Create Post</Link>
        </nav>
    );
};

const styles = {
    nav: {
        padding: "10px",
        backgroundColor: "#282c34",
        display: "flex",
        justifyContent: "space-between",
    },
    link: {
        color: "white",
        textDecoration: "none",
        padding: "5px 10px",
        fontSize: "16px",
    },
};

export default Navbar;
