import React, { useState } from "react";

function TransactionForm({onAddTransaction}) {
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            Date: date,
            Description: description,
            Category: category,
            Amount: parseFloat(amount)
        };

    onAddTransaction(newTransaction)
    setDescription('')
    setCategory('')
    setAmount('')
    setDate('')
    }
    
  return (
    <form onSubmit={handleSubmit} >
      <div id="new-item-form">
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      </div>
      <button type="submit" id="new-item-form-button">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;