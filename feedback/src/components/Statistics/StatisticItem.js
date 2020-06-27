import React from "react";
import PropTypes from "prop-types";
import styles from "./StatisticItem.module.css";

const StatisticItem = ({ label, value }) => {
    return (
        <li className={styles.item}>
            {label} : {value}
        </li>
    );
};

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default StatisticItem;
