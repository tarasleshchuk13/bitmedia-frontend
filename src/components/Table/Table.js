import fromExponential from 'from-exponential'
import styles from './Table.module.scss'

const Table = ({ transactions }) => {
    if (transactions.length === 0) {
        return (
            <div className={styles.notFound}>Transactions not found</div>
        )
    }
    
    function getFormattedDate(date) {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]
        
        return `${months[date.getMonth()]}-${date.getDate()}-${date.getFullYear()}`
    }
    
    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.th}>Block number</th>
                    <th className={styles.th}>Transaction ID</th>
                    <th className={styles.th}>Sender address</th>
                    <th className={styles.th}>Recipient's address</th>
                    <th className={styles.th}>Block confirmations</th>
                    <th className={styles.th}>Date</th>
                    <th className={styles.th}>Value</th>
                    <th className={styles.th}>Transaction Fee</th>
                </tr>
                </thead>
                
                <tbody>
                
                {transactions.map(transaction => (
                    <tr className={styles.tr} key={transaction._id}>
                        <td className={styles.td}>{transaction.blockNumber}</td>
                        <td className={styles.td}>
                            <a
                                className={styles.link}
                                href={`https://etherscan.io/tx/${transaction.transactionId}`}
                            >
                                {transaction.transactionId}
                            </a>
                        </td>
                        <td className={styles.td}>{transaction.senderAddress}</td>
                        <td className={styles.td}>{transaction.recipientsAddress}</td>
                        <td className={styles.td}>{transaction.blockConfirmationsCount}</td>
                        <td className={styles.td}>{getFormattedDate(new Date(transaction.date))}</td>
                        <td className={styles.td}>{fromExponential(transaction.value)}</td>
                        <td className={styles.td}>{fromExponential(transaction.transactionFee)}</td>
                    </tr>
                ))}
                
                </tbody>
            </table>
        </div>
    )
}

export default Table
