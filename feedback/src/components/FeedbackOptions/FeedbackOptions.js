import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ btnValue, onLeaveFeedback }) => {
    return (
        <>
            <button
                type="button"
                name={btnValue}
                className={styles.button}
                onClick={onLeaveFeedback}
            >
                {btnValue}
            </button>
        </>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
