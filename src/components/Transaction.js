import React from "react";
import {useState} from "react";
import {useEffect} from "react";

function Transaction() {
  const [transactionData,setTransactionData] =useState({
date:"",
description:"",
category:"",
amount:""
  })

  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
    .then((response)=>response.json())
    .then((transactionData)=>setTransactionData(transactionData))
  },[])

  setTransactionData(transactionData)

  return (
    console.log(transactionData)
    <tr>
      <td>{transactionData.date}</td>
      <td>{transactionData.description}</td>
      <td>{transactionData.category}</td>
      <td>{transactionData.amount}</td>
    </tr>
  );
}

export default Transaction;
