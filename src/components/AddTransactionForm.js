import React, {useState} from "react";

function AddTransactionForm(props) {
//adding a new transaction
const[formData,setFormData] =useState({
date:"",
description:"",
category:"",
amount:""
})
//function for updating the user
function handleChange(event){
  const name = event.target.name;
  let value = event.target.value;

setFormData({
  ...formData,
  [name]:value,
});
}
//function to handle submissions by the user
function handleSubmit(event){
  event.preventDefault();
  console.log(formData)

fetch("http://localhost:8001/transactions",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(formData),
})
.then((r)=> r.json())
.then((newTransaction)=> console.log(newTransaction));
//console.log(itemData);
// console.log("name:",name);
// console.log("category:",category);
}

  return (
    <div className="ui segment">
      <form onSubmit ={handleSubmit} className="ui form">
        <div className="inline fields">
          <input type="date" onChange={handleChange} name="date" value={formData.date} />
          <input type="text" onChange={handleChange} name="description"  value={formData.description} placeholder="Description" />
          <input type="text" onChange={handleChange} name="category" value={formData.category} placeholder="Category" />
          <input type="number" onChange={handleChange} name="amount"value={formData.amount}  placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;


// return (
//   <div className="ui segment">
//     <form onSubmit ={props.handleSubmit} className="ui form">
//       <div className="inline fields">
//         <input type="date" onChange={props.handleChange} name="date" value={props.formData.date} />
//         <input type="text" onChange={props.handleChange} name="description"  value={props.formData.description} placeholder="Description" />
//         <input type="text" onChange={props.handleChange} name="category" value={props.formData.category} placeholder="Category" />
//         <input type="number" onChange={props.handleChange} name="amount"value={props.formData.amount}  placeholder="Amount" step="0.01" />
//       </div>
//       <button className="ui button" type="submit">
//         Add Transaction
//       </button>
//     </form>
//   </div>