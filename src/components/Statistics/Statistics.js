import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

const Statistics = ({ statistics, title }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={styles.statList}>
                {statistics.map(elem => {
                    return (
                        <li
                            className={styles.item}
                            key={elem.id}
                            style={{ backgroundColor: colorGen() }}
                        >
                            <span className={styles.label}>{elem.label}</span>
                            <span className={styles.percentage}>
                                {elem.percentage}%
                            </span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        }),
    ).isRequired,
};

export default Statistics;
