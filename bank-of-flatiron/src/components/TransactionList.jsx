import React, { useState } from 'react';
import transactionData from '../transactionData/transactionData';

function TransactionList({transactions}){
    const allTransactions =[...transactionData, ...transactions]
   
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
     };

 
  const filteredTransactions = allTransactions.filter((transaction) =>
      transaction.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return(
       <div>
          <input
                  type="text"
                  id="search-form"
                  placeholder="Search recent transactions..."
                  value={searchTerm}
                  onChange={handleSearchChange}
              />
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction, index)=>(
              <tr key={index}>
                  <td>{transaction.Date}</td>
                  <td>{transaction.Description}</td>
                  <td>{transaction.Category}</td>
                  <td>{transaction.Amount}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
    )

 
}
export default TransactionList;