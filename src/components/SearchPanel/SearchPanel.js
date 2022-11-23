import { useState } from 'react'
import Button from '../Button/Button'
import arrow from './icons/arrow.svg'
import search from './icons/search.svg'
import styles from './SearchPanel.module.scss'

const SearchPanel = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('address')
    
    function submitHandler(event) {
        event.preventDefault()
        onSearch(selectValue, inputValue)
    }
    
    return (
        <form className={styles.form}>
            <div className={styles.inputAndSelect}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                />
                
                <div className={styles.selectWrap}>
                    <select
                        className={styles.select}
                        value={selectValue}
                        onChange={event => setSelectValue(event.target.value)}
                    >
                        <option value="address">Address</option>
                        <option value="transactionId">Transaction ID</option>
                        <option value="blockNumber">Block number</option>
                    </select>
                    
                    <img className={styles.icon} src={arrow} alt="arrow"/>
                </div>
            </div>
            
            <Button type="submit" onClick={submitHandler}>
                <img src={search} alt="search"/>
            </Button>
        </form>
    )
}

export default SearchPanel
