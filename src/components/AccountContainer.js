import React ,{useState,useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
const [transaction,setTransaction] =useState([])
const [searchTransactions,setSearchTransaction] =useState("")
useEffect(() => {
  fetch("http://localhost:8001/transactions?q="+searchTransactions)
    .then((resp) => resp.json())
    .then(transaction => setTransaction(transaction))
}, [searchTransactions])
function handleSearch(e) {
 setSearchTransaction(e.target.value)
}

  
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;
