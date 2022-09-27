import React from "react";
//import AddTransactionForm from "./AddTransactionForm";
import Transaction from "./Transaction";
//import AddTransactionForm from "./AddTransactionForm";

function TransactionsList({displayTransactionOnFetch}) {
//   const [selectedName, setSelectedName] = useState("All");
//   const [transactions,setAddTransactions]= useState([]);
//   useEffect(()=>{
//   getTransactions();
//    },[])

//   function getTransactions(){
//     fetch("http://localhost:8001/transactions")
//     .then((response)=>response.json())
//     .then((transactions)=>{
//       console.log(transactions)
//       setAddTransactions(transactions)  
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// }
// function newTransaction(updateTransaction){
//  setAddTransactions(...transactions,updateTransaction)
// }
// function handleNameSearch(searchnames) {
//   setSelectedName(searchnames);
// }

// const transactionsToDisplay = transactions.filter((transaction) => {
//   if (selectedName === "All") return true;

//   return transaction.searchnames === selectedName;
// });
 
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
      
 {/* render a list of <Transaction> components here */}
 {/* <Search searchnames={handleNameSearch}/>
 <AddTransactionForm onAddTransaction={newTransaction}/> */}
     {displayTransactionOnFetch.map((transaction)=>(
     <Transaction key={transaction.id} transaction={transaction}
     />
     ))}
    

     {/* // return (
  //   transactions.map((transaction)=>(
  //   <tr key={transactions.id}>
  //     <td>{transaction.date}</td>
  //     <td>{transaction.description}</td>
  //     <td>{transaction.category}</td>
  //     <td>{transaction.amount}</td>
  //   </tr> */}

      </tbody>
    </table>
  );
}

export default TransactionsList;

// <AddTransactionForm
// formData={formData}
// handleChange={handleChange}
// handleSubmit={handleSubmit}
// />
