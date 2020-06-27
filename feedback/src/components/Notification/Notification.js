import React from "react";
import PropTypes from "prop-types";
import styles from "./Notification.module.css";

const Notfication = ({ message }) => {
    return <p className={styles.notfication}>{message}</p>;
};

Notfication.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notfication;
