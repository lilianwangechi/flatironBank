import React,{useEffect,useState} from "react";
//import React ,{useState,useEffect}from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {


const [selectedName, setSelectedName] = useState("All");
const [transactions,setAddTransactions]= useState([]);
useEffect(()=>{
getTransactions();
 },[])

function getTransactions(){
  fetch("http://localhost:8001/transactions")
  .then((response)=>response.json())
  .then((transactions)=>{
    console.log(transactions)
    setAddTransactions(transactions)  
})
.catch((err)=>{
  console.log(err);
});
}
function newTransaction(updateTransaction){
setAddTransactions(...transactions,updateTransaction)
}
function handleNameSearch(searchnames) {
setSelectedName(searchnames);
}

const transactionsToDisplay = transactions.filter((transaction) => {
if (selectedName === "All") return true;

return transaction.searchnames === selectedName;
});
  
  return (
    <div>
  <Search searchnames={handleNameSearch}/>
 <AddTransactionForm onAddTransaction={newTransaction}/>
  <TransactionsList displayTransactionOnFetch={transactionsToDisplay}/>
      {/* <TransactionsList transactions={transaction} /> */}
    </div>
  );
}

export default AccountContainer;
