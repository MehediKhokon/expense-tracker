import React from 'react'
import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import HistoryList from './components/HistoryList'
import IncomeExpenses from './components/IncomeExpenses'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <HistoryList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
