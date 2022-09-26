import React,{useEffect,useState} from "react";


function Transaction() {
  
  const [transactions,setAddTransactions]= useState([]);
  useEffect(()=>{
  getTransactions();
   },[])

  function getTransactions(){
    fetch("http://localhost:8001/transactions")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data)
      setAddTransactions(data)  
  })
  .catch((err)=>{
    console.log(err);
  });
}
  return (
    transactions.map((transaction)=>(
    <tr key={transactions.id}>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>

))
  );
}

export default Transaction


// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// function Transaction() {
// const [transactions,setTransaction]= useState([])
// useEffect(()=>{
// fetch("http://localhost:8001/transactions")
// .then((response)=>response.json())
// .then((transactions)=>transactions.map((transaction)=>(
//   <tr key={(transactions.id)}>
//     <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//   </tr>
// )


// })
//   },[])

//   return (
//     <table>
//    {transactionsList}
//     </table>
      
  
//   );
// }

// export default Transaction;




// import React,{useEffect} from "react";
// //import {useState} from "react";
// //import {useEffect} from "react";
//import TransactionsList from './TransactionsList';

// function Transaction() {
// //   const [transactionData,setTransactionData] =useState({
// // date:"",
// // description:"",
// // category:"",
// // amount:""
// //   })

//   const transaction = useEffect(()=>{
//     fetch("http://localhost:8001/transactions")
//     .then((response)=>response.json())
//     .then((transactionData)=>(transactionData))
    
//     //setTransactionData(transactionData));
//   },[])

//   return (
//    // console.log(transaction)
//     <tr>
//       <td>{transactionData.date}</td>,
//       <td>{transactionData.description}</td>,
//       <td>{transactionData.category}</td>,
//       <td>{transactionData.amount}</td>
//     </tr>
//   );
    
// }

// export default Transaction;
