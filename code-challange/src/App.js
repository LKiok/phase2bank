import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transaction, setTransactions]=useState([])
  useEffect(() =>{
    fetch(`http://localhost:8000/transactions`)
    .then((res) =>{
      
      return res.json()
    })
    .then((data)=>{
      setTransactions(data)
    })
  }, [])
 
  return (
    <div className="App">
      <h1>Transaction App</h1>
      <TransactionForm />
      
      {transaction && <SearchBar transactions={transaction}/>}
    </div>
  );
};

export default App;
