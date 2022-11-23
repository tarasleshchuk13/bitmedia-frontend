import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Loader from './components/Loader/Loader'
import Pagination from './components/Pagination/Pagination'
import SearchPanel from './components/SearchPanel/SearchPanel'
import Table from './components/Table/Table'

function App() {
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [transactions, setTransactions] = useState([])
    const [currentSelectValue, setCurrentSelectValue] = useState('')
    const [currentInputValue, setCurrentInputValue] = useState('')
    
    const transactionsPerPage = 14
    
    useEffect(() => {
        fetchTransactions()
    }, [])
    
    async function fetchTransactions(page = 1, selectValue, inputValue) {
        setLoading(true)
        
        const skip = (page - 1) * transactionsPerPage
        let url = `https://bitmedia-backend1.herokuapp.com/transaction?limit=${transactionsPerPage}&skip=${skip}`
        
        if (inputValue && inputValue.trim().length > 0) {
            url += `&${selectValue}=${inputValue}`
        }
        
        const response = await fetch(url)
        const data = await response.json()
        
        setTransactions(data.transactions)
        setPageCount(Math.ceil(data.transactionCount / transactionsPerPage))
        setLoading(false)
    }
    
    function searchHandler(selectValue, inputValue) {
        setCurrentPage(1)
        setCurrentInputValue(inputValue)
        setCurrentSelectValue(selectValue)
        
        fetchTransactions(1, selectValue, inputValue)
    }
    
    function changePageHandler(newPage) {
        if (newPage === currentPage || newPage > pageCount || newPage < 1) {
            return
        }
        
        setCurrentPage(newPage)
        fetchTransactions(newPage, currentSelectValue, currentInputValue)
    }
    
    return (
        <div className="wrapper">
            <div>
                <Header/>
                <div className="container">
                    <SearchPanel onSearch={searchHandler}/>
                    
                    {loading ? (
                        <Loader/>
                    ) : (
                        <>
                            <Table transactions={transactions}/>
                            <Pagination
                                pageCount={pageCount}
                                currentPage={currentPage}
                                onChangePage={changePageHandler}
                            />
                        </>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App
