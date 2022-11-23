import Button from '../Button/Button'
import arrowDisabled from './icons/arrow-disabled.svg'
import arrow from './icons/arrow.svg'
import styles from './Pagination.module.scss'

const Pagination = ({ pageCount, currentPage, onChangePage }) => {
    const arrayFromPageCount = [...(Array(pageCount).keys())].map(n => n + 1)
    
    if (pageCount < 2) {
        return null
    }
    
    return (
        <div className={styles.pagination}>
            {currentPage === 1 ? (
                <button className={styles.arrowButton}>
                    <img src={arrowDisabled} alt="arrow"/>
                </button>
            ) : (
                <button
                    className={styles.arrowButton}
                    onClick={() => onChangePage(currentPage - 1)}
                >
                    <img src={arrow} alt="arrow"/>
                </button>
            )}
            
            {pageCount < 6 ? (
                arrayFromPageCount.map(page => (
                    <Button
                        key={page}
                        styleType={page === currentPage ? 'primary' : 'secondary'}
                        onClick={() => onChangePage(page)}
                    >{page}</Button>
                ))
            ) : (
                <>
                    <Button
                        styleType={currentPage === 1 ? 'primary' : 'secondary'}
                        onClick={() => onChangePage(1)}
                    >1</Button>
                    
                    {(currentPage === 1 || currentPage === 2) ? (
                        <Button
                            styleType={currentPage === 2 ? 'primary' : 'secondary'}
                            onClick={() => onChangePage(2)}
                        >2</Button>
                    ) : (
                        <div className={styles.dots}>...</div>
                    )}
                    
                    {(currentPage > 2 && currentPage < pageCount - 1) && (
                        <Button
                            styleType="primary"
                        >{currentPage}</Button>
                    )}
                    
                    {(currentPage === pageCount || currentPage === pageCount - 1) ? (
                        <Button
                            styleType={currentPage === pageCount - 1 ? 'primary' : 'secondary'}
                            onClick={() => onChangePage(pageCount - 1)}
                        >{pageCount - 1}</Button>
                    ) : (
                        <div className={styles.dots}>...</div>
                    )}
                    
                    <Button
                        styleType={currentPage === pageCount ? 'primary' : 'secondary'}
                        onClick={() => onChangePage(pageCount)}
                    >{pageCount}</Button>
                </>
            )}
            
            {currentPage === pageCount ? (
                <button className={styles.arrowButton}>
                    <img src={arrowDisabled} alt="arrow" style={{ transform: 'rotate(180deg)' }}/>
                </button>
            ) : (
                <button
                    className={styles.arrowButton}
                    onClick={() => onChangePage(currentPage + 1)}
                >
                    <img src={arrow} alt="arrow" style={{ transform: 'rotate(180deg)' }}/>
                </button>
            )}
        </div>
    )
}

export default Pagination
