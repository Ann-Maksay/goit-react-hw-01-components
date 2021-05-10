import React from 'react';
import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
            <thead>
                <tr>
                    <th className={styles.title}>Type</th>
                    <th className={styles.title}>Amount</th>
                    <th className={styles.title}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(elem => {
                    return (
                        <tr key={elem.id} className={styles.line}>
                            <td className={styles.tableItem}>{elem.type}</td>
                            <td className={styles.tableItem}>{elem.amount}</td>
                            <td className={styles.tableItem}>
                                {elem.currency}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;
