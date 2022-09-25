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
    .then
  })
  return (
    <tr>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td>
    </tr>
  );
}

export default Transaction;
