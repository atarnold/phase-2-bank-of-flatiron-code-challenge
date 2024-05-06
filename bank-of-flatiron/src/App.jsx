import React,{useState} from 'react';
import './App.css'
import Header from './components/Header';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([])
  
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }
  
  return (
    <div>
      <Header />
      <TransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionList transactions={transactions}/>
    </div>
  );
}

export default App;