import React from "react";
import StatisticItem from "./StatisticItem";
import styles from "./StatisticList.module.css";
import PropTypes from "prop-types";

const StatisticList = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={styles.list}>
            <StatisticItem label="Good" value={good} />
            <StatisticItem label="Neutral" value={neutral} />
            <StatisticItem label="Bad" value={bad} />
            <StatisticItem label="Total" value={total} />
            <StatisticItem
                label="Positive feedback"
                value={`${positivePercentage} %`}
            />
        </ul>
    );
};

StatisticList.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default StatisticList;
